using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Funtility.Areas.TextAdventure.Models;

namespace Funtility.Areas.TextAdventure.ViewModels
{
    public enum TextAdventure_GamePageMode
    {
        SelectToPlay = 1,
        PlaySelected = 2,
        CreateNew = 3,
        EditSelected = 4
    }

    public class GamesListViewModel
    {
        public TextAdventure_GamePageMode GamePage { get; set; }
        public List<TextAdventureGame> Users_TextAdventureGames { get; set; }
        public List<TextAdventureGame> Public_TextAdventureGames { get; set; }
        public List<TextAdventureSave> TextAdventureSaves { get; set; }
    }
}