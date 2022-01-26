using Palizma.Domain.Attributes;

namespace Palizma.Domain.Catalogs
{
    [Auditable]
    public class CatalogBrand
    {
        public int Id { get; set; }
        public string Brand { get; set; }
    }
}
