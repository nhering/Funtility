using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Funtility.ViewModels;
using Microsoft.AspNet.Identity;

namespace Funtility.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            string thisUser = User.Identity.GetUserId();

            System.Security.Principal.WindowsIdentity r = Request.LogonUserIdentity;
            HomeViewModel homeViewModel = new HomeViewModel();
            return View(homeViewModel);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}