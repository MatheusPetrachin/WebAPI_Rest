using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_Rest.Migrations
{
    public partial class Alterandotipodecoluna : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Value",
                table: "Launches",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Value",
                table: "Launches",
                nullable: true,
                oldClrType: typeof(double));
        }
    }
}
