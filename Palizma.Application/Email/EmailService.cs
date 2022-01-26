using System.Net;
using System.Net.Mail;
using System.Text;

namespace Palizma.Application.Email
{
    public class EmailService : IEmailService
    {
        public Task Execute(string UserEmail, string body, string subject)
        {
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.Host = "smtp.gmail.com";
            client.EnableSsl = true;
            client.Timeout = 1000000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            //
            client.Credentials = new NetworkCredential("palizma.web@gmail.com", "Palizma2022!");
            MailMessage message = new MailMessage("palizma.web@gmail.com", UserEmail, subject, body);
            message.IsBodyHtml = true;
            message.BodyEncoding = UTF8Encoding.UTF8;
            message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnSuccess;
            client.Send(message);
            return Task.CompletedTask;

        }
    }
}
