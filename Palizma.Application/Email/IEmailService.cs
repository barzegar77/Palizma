namespace Palizma.Application.Email
{
    public interface IEmailService
    {
        Task Execute(string UserEmail, string body, string subject);
    }



}
