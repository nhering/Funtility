using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Funtility.Areas.TextAdventure.Models;
using Funtility.Models;

namespace Funtility.Areas.TextAdventure.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TextAdventure/Home
        public ActionResult Index()
        {
            //return View(db.TextAdventureGame.ToList());
            return View();
        }

        // GET: TextAdventure/Home/Details/5
        public ActionResult Play(int? id)
        {
            if (id == 0)
            {
                return View();
            }
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            if (textAdventureGame == null)
            {
                return HttpNotFound();
            }
            return View(textAdventureGame);
        }

        // GET: TextAdventure/Home/Create?id=0
        public ActionResult Create(int? id)
        {
            if (id == 0)
            {
                TextAdventureGame newGame = new TextAdventureGame()
                {
                    ID = 0,
                    UserID = 0, //TODO get user ID
                    Published = 0,
                    Name = "New Game",
                    Description = "Give this game a description",
                    GameData = "NEW"
                };
                return View(newGame);
            }
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            if (textAdventureGame == null)
            {
                return HttpNotFound();//TODO Redirect to index view. Maybe with a message?
            }
            return View(textAdventureGame);
        }

        // POST: TextAdventure/Home/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "UserID,Published,Name,Description,GameData")] TextAdventureGame textAdventureGame)
        {
            if (ModelState.IsValid)
            {
                db.TextAdventureGame.Add(textAdventureGame);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(textAdventureGame);
        }

        //// GET: TextAdventure/Home/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        TextAdventureGame newGame = new TextAdventureGame()
        //        {
        //            ID = 0,
        //            UserID = 0, //TODO get user ID
        //            Published = 0,
        //            Name = "New Game",
        //            Description = "Give this game a description",
        //            GameData = ""
        //        };
        //        return View(newGame);
        //    }
        //    TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
        //    if (textAdventureGame == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(textAdventureGame);
        //}

        //// POST: TextAdventure/Home/Edit/5
        //// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        //// more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include = "ID,UserID,Published,Name,Description,GameData")] TextAdventureGame textAdventureGame)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(textAdventureGame).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(textAdventureGame);
        //}

        //// GET: TextAdventure/Home/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
        //    if (textAdventureGame == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(textAdventureGame);
        //}

        //// POST: TextAdventure/Home/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
        //    db.TextAdventureGame.Remove(textAdventureGame);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
