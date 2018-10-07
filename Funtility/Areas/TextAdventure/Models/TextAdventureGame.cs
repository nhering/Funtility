using System.ComponentModel.DataAnnotations.Schema;

namespace Funtility.Areas.TextAdventure.Models
{
    [Table("TextAdventureGames")]
    public class TextAdventureGame
    {
        //Unique ID of the game
        public int ID { get; set; }

        //The ID of the User who made the game
        public int UserID { get; set; }

        //A "boolean" value to represent if the game can be seen by users browsing games
        //If it is set to false, only the user who created the game can see it
        public int Published { get; set; } //1 = true 0 = false

        //The name of the game
        public string Name { get; set; }

        //A brief description of the game displayed to users while they are browsing published games
        //a full description of the game can be stored in the Json object to be displayed once the game is loaded
        public string Description { get; set; }

        //Json object containing all the data for the game
        public string GameData { get; set; }
    }
}