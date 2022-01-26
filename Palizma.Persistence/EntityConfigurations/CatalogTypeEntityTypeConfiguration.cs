﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Palizma.Domain.Catalogs;

namespace Palizma.Persistence.EntityConfigurations
{
    public class CatalogTypeEntityTypeConfiguration
        : IEntityTypeConfiguration<CatalogType>
    {
        public void Configure(EntityTypeBuilder<CatalogType> builder)
        {
            builder.ToTable("CatalogType");
            builder.Property(cb => cb.Type)
                   .IsRequired()
                   .HasMaxLength(100);
        }
    } 
    
    
    public class CatalogItemEntityTypeConfiguration
        : IEntityTypeConfiguration<CatalogItem>
    {
        public void Configure(EntityTypeBuilder<CatalogItem> builder)
        {
            
            builder.Property(cb => cb.Slug)
                   .HasMaxLength(900)
                   .IsUnicode();
        }
    }
}
