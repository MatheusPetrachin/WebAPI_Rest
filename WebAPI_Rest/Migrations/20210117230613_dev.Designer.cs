﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI_Rest.Models;

namespace WebAPI_Rest.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20210117230613_dev")]
    partial class dev
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("WebAPI_Rest.Models.Launch", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<DateTime>("LaunchDate");

                    b.Property<string>("LaunchType");

                    b.Property<string>("Value");

                    b.HasKey("Id");

                    b.ToTable("Launches");
                });

            modelBuilder.Entity("WebAPI_Rest.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(45);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(45);

                    b.Property<string>("Telephone");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
