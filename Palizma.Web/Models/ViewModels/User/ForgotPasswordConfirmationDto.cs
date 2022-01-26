using System.ComponentModel.DataAnnotations;

namespace Palizma.Web.Models.ViewModels.User
{
    public class ForgotPasswordConfirmationDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
