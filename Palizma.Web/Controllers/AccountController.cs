using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Palizma.Application.Email;
using Palizma.Domain.Users;
using Palizma.Web.Models.ViewModels.Register;
using Palizma.Web.Models.ViewModels.User;
using Palizma.Web.Utilities.Filters;

namespace Palizma.Web.Controllers
{
    [ServiceFilter(typeof(SaveVisitorFilter))]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IEmailService _emailService;
        //private readonly IBasketService basketService;

        public AccountController(UserManager<User> userManager,
            SignInManager<User> signInManager/*, IBasketService basketService*/,IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailService = emailService;
            //this.basketService = basketService;
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            User newUser = new User()
            {
                Email = model.Email,
                UserName = model.Email,
                FullName = model.FullName,
                //PhoneNumber = model.PhoneNumber,
            };

            var result = _userManager.CreateAsync(newUser, model.Password).Result;
            if (result.Succeeded)
            {
                var token = _userManager.GenerateEmailConfirmationTokenAsync(newUser).Result;
                string callbackUrl = Url.Action("ConfirmEmail", "Account", new
                {
                    UserId = newUser.Id
                ,
                    token = token
                }, protocol: Request.Scheme);

                string body = $"Please click on the link below to activate your Palizma account  <br/> <a href={callbackUrl}> Link </a>";
                _emailService.Execute(newUser.Email, body, "Palizma Account Activition");

                var user = _userManager.FindByNameAsync(newUser.Email).Result;
                //TransferBasketForuser(user.Id);
                _signInManager.SignInAsync(user, true).Wait();
                return RedirectToAction("DisplayEmail");
            }

            foreach (var item in result.Errors)
            {
                ModelState.AddModelError(item.Code, item.Description);
            }
            return View(model);
        }


        public IActionResult ConfirmEmail(string UserId, string Token)
        {
            if (UserId == null || Token == null)
            {
                return BadRequest();
            }
            var user = _userManager.FindByIdAsync(UserId).Result;
            if (user == null)
            {
                return View("Error");
            }

            var result = _userManager.ConfirmEmailAsync(user, Token).Result;
            if (result.Succeeded)
            {
                return RedirectToAction("login");
            }
            else
            {

            }
            return RedirectToAction("login");

        }

        public IActionResult DisplayEmail()
        {
            return View();
        }


        public IActionResult Profile()
        {
            return View();
        }

        public IActionResult Login(string returnUrl = "/")
        {
            return View(new LoginViewModel
            {
                ReturnUrl = returnUrl,
            });
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var user = _userManager.FindByNameAsync(model.Email).Result;
            if (user == null)
            {
                ModelState.AddModelError("", "کاربر یافت نشد");
                return View(model);
            }
            _signInManager.SignOutAsync();
            var result = _signInManager.PasswordSignInAsync(user, model.Password
                , model.IsPersistent, true).Result;

            if (result.Succeeded)
            {
                //TransferBasketForuser(user.Id);
                return Redirect(model?.ReturnUrl ?? "/");
            }
            if (result.RequiresTwoFactor)
            {
                //
            }

            return View(model);
        }

        public IActionResult LogOut()
        {
            _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }



        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ForgotPassword(ForgotPasswordConfirmationDto forgot)
        {
            if (!ModelState.IsValid)
            {

                return View(forgot);
            }

            var user = _userManager.FindByEmailAsync(forgot.Email).Result;
            if (user == null || _userManager.IsEmailConfirmedAsync(user).Result == false)
            {
                ViewBag.meesage = "The entered email may not be valid! Or you have not verified your email";
                return View();
            }

            string token = _userManager.GeneratePasswordResetTokenAsync(user).Result;
            string callbakUrl = Url.Action("ResetPassword", "Account", new
            {
                UserId = user.Id,
                token = token
            }, protocol: Request.Scheme);

            string body = $"Click the link below to reset the password <br/> <a href={callbakUrl}> link reset Password </a>";
            _emailService.Execute(user.Email, body, "forget password");
            ViewBag.meesage = "Password reset link sent to your email";
            return View();
        }


        //private void TransferBasketForuser(string userId)
        //{
        //    string cookieName = "BasketId";
        //    if (Request.Cookies.ContainsKey(cookieName))
        //    {
        //        var anonymousId = Request.Cookies[cookieName];
        //        basketService.TransferBasket(anonymousId, userId);
        //        Response.Cookies.Delete(cookieName);
        //    }
        //}
    }
}
