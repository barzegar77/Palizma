﻿using Microsoft.EntityFrameworkCore;
using Palizma.Application.Interfaces.Contexts;
using Palizma.Domain.Attributes;
using Palizma.Domain.Users;

namespace Palizma.Persistence.Contexts
{
    public class DataBaseContext : DbContext , IDataBaseContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<User>().Property<DateTime?>("InsertTime");
            //builder.Entity<User>().Property<DateTime?>("UpdateTime");

            foreach (var entityType in builder.Model.GetEntityTypes())
            {
                if (entityType.ClrType.GetCustomAttributes(typeof(AuditableAttribute), true).Length > 0)
                {
                    builder.Entity(entityType.Name).Property<DateTime>("InsertTime").HasDefaultValue(DateTime.Now);
                    builder.Entity(entityType.Name).Property<DateTime?>("UpdateTime");
                    builder.Entity(entityType.Name).Property<DateTime?>("RemoveTime");
                    builder.Entity(entityType.Name).Property<bool>("IsRemoved").HasDefaultValue(false);
                }
            }
            //builder.Entity<CatalogType>()
            //    .HasQueryFilter(m => EF.Property<bool>(m, "IsRemoved") == false);



            //builder.ApplyConfiguration(new CatalogBrandEntityTypeConfiguration());
            //builder.ApplyConfiguration(new CatalogTypeEntityTypeConfiguration());

            //DataBaseContextSeed.CatalogSeed(builder);


            base.OnModelCreating(builder);
        }

        public override int SaveChanges()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(p => p.State == EntityState.Modified ||
                p.State == EntityState.Added ||
                p.State == EntityState.Deleted
                );
            foreach (var item in modifiedEntries)
            {
                var entityType = item.Context.Model.FindEntityType(item.Entity.GetType());

                var inserted = entityType.FindProperty("InsertTime");
                var updated = entityType.FindProperty("UpdateTime");
                var RemoveTime = entityType.FindProperty("RemoveTime");
                var IsRemoved = entityType.FindProperty("IsRemoved");
                if (item.State == EntityState.Added && inserted != null)
                {
                    item.Property("InsertTime").CurrentValue = DateTime.Now;
                }
                if (item.State == EntityState.Modified && updated != null)
                {
                    item.Property("UpdateTime").CurrentValue = DateTime.Now;
                }

                if (item.State == EntityState.Deleted && RemoveTime != null && IsRemoved != null)
                {
                    item.Property("RemoveTime").CurrentValue = DateTime.Now;
                    item.Property("IsRemoved").CurrentValue = true;
                    item.State = EntityState.Modified;
                }
            }
            return base.SaveChanges();
        }


    }
}