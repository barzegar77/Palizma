using System.ComponentModel.DataAnnotations;

namespace Palizma.Web.Models.ViewModels.Register
{
    public class RegisterViewModel
    {
        [Required]
        [Display(Name = "Full Name")]
        [MaxLength(150)]
        public string FullName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email Address")]
        public string Email { get; set; }


        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare(nameof(Password))]
        [Display(Name = "Repeat Password")]
        public string RePassword { get; set; }

       // public string PhoneNumber { get; set; }
    }
}
