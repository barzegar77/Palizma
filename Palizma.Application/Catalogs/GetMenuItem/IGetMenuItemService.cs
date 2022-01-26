using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Palizma.Application.Interfaces.Contexts;

namespace Palizma.Application.Catalogs.GetMenuItem
{
    public interface IGetMenuItemService
    {
        List<MenuItemDto> Execute();

    }
    public class GetMenuItemService : IGetMenuItemService
    {
        private readonly IDataBaseContext context;
        private readonly IMapper mapper;

        public GetMenuItemService(IDataBaseContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        public List<MenuItemDto> Execute()
        {
            var catalogType = context.CatalogTypes.Include(p => p.ParentCatalogType)
                .ToList();
            var data = mapper.Map<List<MenuItemDto>>(catalogType);
            return data;
        }
    }

    public class MenuItemDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentId { get; set; }
        public List<MenuItemDto> SubMenu { get; set; }
    }

}
