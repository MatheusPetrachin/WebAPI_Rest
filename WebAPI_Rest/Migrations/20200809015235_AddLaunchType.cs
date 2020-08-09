using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI_Rest.Migrations
{
    public partial class AddLaunchType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LaunchType",
                table: "Launches",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LaunchType",
                table: "Launches");
        }
    }
}
