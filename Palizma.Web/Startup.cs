using Microsoft.EntityFrameworkCore;
using Palizma.Application.Interfaces.Contexts;
using Palizma.Application.Visitors.SaveVisitorInfo;
using Palizma.Application.Visitors.VisitorOnline;
using Palizma.Infrastructure.IdentityConfigs;
using Palizma.Persistence.Contexts;
using Palizma.Persistence.Contexts.MongoContext;
using Palizma.Web.Utilities.Filters;

namespace Palizma.Web
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
            services.AddControllersWithViews();


            #region  Connection String
            services.AddTransient<IDataBaseContext, DataBaseContext>();

            string connection = Configuration["ConnectionString:Default"];
            services.AddDbContext<DataBaseContext>(option => option.UseSqlServer(connection));

            services.AddIdentityService(Configuration);
            services.AddAuthorization();
            services.ConfigureApplicationCookie(option =>
            {
                option.ExpireTimeSpan = TimeSpan.FromMinutes(7200);
                option.LoginPath = "/account/login";
                option.AccessDeniedPath = "/Account/AccessDenied";
                option.SlidingExpiration = true;
            });
            #endregion


            services.AddTransient(typeof(IMongoDbContext<>), typeof(MongoDbContext<>));
            services.AddTransient<ISaveVisitorInfoService, SaveVisitorInfoService>();
            services.AddTransient<IIVisitorOnlineService, VisitorOnlineService>();
            //services.AddTransient<IGetMenuItemService,  GetMenuItemService>();
            services.AddScoped<SaveVisitorFilter>();

            //services.AddSignalR();

            //mapper
            //services.AddAutoMapper(typeof(CatalogMappingProfile));

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
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //app.UseSetVisitorId();
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                //endpoints.MapHub<OnlineVisitorHub>("/chathub");
            });
        }
    }
}
