using Microsoft.EntityFrameworkCore;
using Palizma.Application.Interfaces.Contexts;
using Palizma.Persistence.Contexts;

namespace Palizma.Admin
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages()/*.AddRazorRuntimeCompilation()*/;
            services.AddControllers();

            //services.AddScoped<IGetTodayReportService, GetTodayReportService>();
            //services.AddTransient(typeof(IMongoDbContext<>), typeof(MongoDbContext<>));
            //services.AddTransient<ICatalogTypeService, CatalogTypeService>();
            //services.AddTransient<IAddNewCatalogItemService,  AddNewCatalogItemService>();
            //services.AddTransient<ICatalogItemService,  CatalogItemService>();
            //services.AddTransient<IImageUploadService,  ImageUploadService>();
            //services.AddTransient<IAddNewDiscountService,  AddNewDiscountService>();
            //services.AddTransient<IDiscountService,  DiscountService>();
            //services.AddTransient<IDiscountHistoryService,  DiscountHistoryService>();
            //services.AddTransient<IBannersService,  BannersService>();
            //services.AddTransient<IUriComposerService,  UriComposerService>();


            #region connection String SqlServer

            services.AddScoped<IDataBaseContext, DataBaseContext>();
            string connection = Configuration["ConnectionString:Default"];
            services.AddDbContext<DataBaseContext>(option => option.UseSqlServer(connection));

            #endregion


            //services.AddDistributedSqlServerCache(option =>
            //{
            //    option.ConnectionString = connection;
            //    option.SchemaName = "dbo";
            //    option.TableName = "CacheData";
            //});
            //mapper
            //services.AddAutoMapper(typeof(CatalogMappingProfile));
            //services.AddAutoMapper(typeof(CatalogVMMappingProfile));


            //fluentValidation
            //services.AddTransient<IValidator<AddNewCatalogItemDto>, AddNewCatalogItemDtoValidator>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });
        }
    }
}
