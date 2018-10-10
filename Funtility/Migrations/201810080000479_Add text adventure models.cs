namespace Funtility.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Addtextadventuremodels : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TextAdventureGames",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserID = c.Int(nullable: false),
                        Published = c.Int(nullable: false),
                        Name = c.String(),
                        Description = c.String(),
                        GameData = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.TextAdventureSaves",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserID = c.Int(nullable: false),
                        TextAdventureGameID = c.Int(nullable: false),
                        SaveData = c.String(),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TextAdventureSaves");
            DropTable("dbo.TextAdventureGames");
        }
    }
}
