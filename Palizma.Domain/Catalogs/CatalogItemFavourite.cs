using Palizma.Domain.Attributes;

namespace Palizma.Domain.Catalogs
{
    [Auditable]
    public class CatalogItemFavourite
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public CatalogItem CatalogItem { get; set; }
        public int CatalogItemId { get; set; }

    }
}
