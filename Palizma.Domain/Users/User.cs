using Microsoft.AspNetCore.Identity;
using Palizma.Domain.Attributes;

namespace Palizma.Domain.Users
{
    [Auditable]
    public class User : IdentityUser
    {
        public string FullName { get; set; }
    }
}
