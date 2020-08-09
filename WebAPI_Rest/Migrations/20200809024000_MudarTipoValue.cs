using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_Rest.Migrations
{
    public partial class MudarTipoValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Value",
                table: "Launches",
                nullable: true,
                oldClrType: typeof(decimal));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Value",
                table: "Launches",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
