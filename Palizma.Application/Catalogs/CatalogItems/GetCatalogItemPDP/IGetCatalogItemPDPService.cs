﻿using Microsoft.EntityFrameworkCore;
using Palizma.Application.Interfaces.Contexts;

namespace Palizma.Application.Catalogs.CatalogItems.GetCatalogItemPDP
{
    //public interface IGetCatalogItemPDPService
    //{
    //    CatalogItemPDPDto Execute(string Slug);
    //}

    //public class GetCatalogItemPDPService : IGetCatalogItemPDPService
    //{
    //    private readonly IDataBaseContext context;
    //    private readonly IUriComposerService uriComposerService;

    //    public GetCatalogItemPDPService(IDataBaseContext context, IUriComposerService uriComposerService)
    //    {
    //        this.context = context;
    //        this.uriComposerService = uriComposerService;
    //    }
    //    public CatalogItemPDPDto Execute(string Slug)
    //    {
    //        var catalogitem = context.CatalogItems
    //            .Include(p => p.CatalogItemFeatures)
    //            .Include(p => p.CatalogItemImages)
    //            .Include(p => p.CatalogType)
    //            .Include(p => p.CatalogBrand)
    //            .Include(p => p.Discounts)
    //            .SingleOrDefault(p => p.Slug==Slug);
    //        catalogitem.VisitCount += 1;
    //        context.SaveChanges();

    //        var feature = catalogitem.CatalogItemFeatures
    //            .Select(p => new PDPFeaturesDto
    //            {
    //                Group = p.Group,
    //                Key = p.Key,
    //                Value = p.Value
    //            }).ToList()
    //            .GroupBy(p => p.Group);

    //        var similarCatalogItems = context
    //           .CatalogItems
    //           .Include(p => p.CatalogItemImages)
    //           .Where(p => p.CatalogTypeId == catalogitem.CatalogTypeId)
    //           .Take(10)
    //           .Select(p => new SimilarCatalogItemDto
    //           {
    //               Id = p.Id,
    //               Images = uriComposerService.ComposeImageUri(p.CatalogItemImages.FirstOrDefault().Src),
    //               Price = p.Price,
    //               Name = p.Name
    //           }).ToList();

    //        return new CatalogItemPDPDto
    //        {
    //            Features = feature,
    //            SimilarCatalogs = similarCatalogItems,
    //            Id = catalogitem.Id,
    //            Name = catalogitem.Name,
    //            Brand = catalogitem.CatalogBrand.Brand,
    //            Type = catalogitem.CatalogType.Type,
    //            Price = catalogitem.Price,
    //            Description = catalogitem.Description,
    //            Images = catalogitem.CatalogItemImages.Select(p => uriComposerService.ComposeImageUri(p.Src)).ToList(),
    //            OldPrice = catalogitem.OldPrice,
    //            PercentDiscount = catalogitem.PercentDiscount,
    //        };


    //    }
    //}

    public class CatalogItemPDPDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int Price { get; set; }
        public int? OldPrice { get; set; }
        public int? PercentDiscount { get; set; }
        public List<string> Images { get; set; }
        public string Description { get; set; }
        public IEnumerable<IGrouping<string, PDPFeaturesDto>> Features { get; set; }
        public List<SimilarCatalogItemDto> SimilarCatalogs { get; set; }

    }

    public class PDPFeaturesDto
    {
        public string Group { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }


    public class SimilarCatalogItemDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Images { get; set; }
    }
}
