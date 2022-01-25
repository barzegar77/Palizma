using Microsoft.EntityFrameworkCore;
using Palizma.Domain.Users;

namespace Palizma.Application.Interfaces.Contexts
{
    public interface IDataBaseContext
    {
        int SaveChanges();
        int SaveChanges(bool acceptAllChangesOnSuccess);
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
    }
}
