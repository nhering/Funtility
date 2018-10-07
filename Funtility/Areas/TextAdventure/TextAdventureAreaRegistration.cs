using System.Web.Mvc;

namespace Funtility.Areas.TextAdventure
{
    public class TextAdventureAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TextAdventure";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TextAdventure_default",
                "TextAdventure/{controller}/{action}/{id}",
                new { controller = "TextAdventure", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}