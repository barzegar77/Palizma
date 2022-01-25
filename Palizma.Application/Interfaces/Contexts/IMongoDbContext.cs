using MongoDB.Driver;

namespace Palizma.Application.Interfaces.Contexts
{
    public interface IMongoDbContext<T>
    {
        public IMongoCollection<T> GetCollection();
    }
}
