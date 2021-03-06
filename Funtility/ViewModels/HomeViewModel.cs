﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace Funtility.ViewModels
{
    public class HomeViewModel
    {
        public List<GameCard> Games
        {
            get
            {
                List<GameCard> value = new List<GameCard>();
                value.Add(new GameCard());
                return value;
            }
        }
    }

    public class GameCard
    {
        public string GameName { get; set; }
        public string Description { get; set; }
        public string BaseUrl
        {
            get
            {
                return WebConfigurationManager.AppSettings["baseUrl"];
            }
        }

        public GameCard()
        {
            this.GameName = "Text Adventure Maker";
            this.Description = "You can make your own game or play a friends!";
        }
    }
}