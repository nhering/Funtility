using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Funtility.Areas.TextAdventure.Models
{
    [Table("TextAdventureSaves")]
    public class TextAdventureSave
    {
        //The ID of the game save
        public int ID { get; set; }

        //The ID of the user who's playing the game
        public int UserID { get; set; }

        //The ID of the game the save is for
        public int TextAdventureGameID { get; set; }

        //Json object containing all the data for the save
        public string SaveData { get; set; }

        //Date of the save. This enables a player to have multiple saves for the same game
        public DateTime Date { get; set; }
    }
}