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
    public class TextAdventureController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: TextAdventure/TextAdventureGame
        public ActionResult Index()
        {
            return View(db.TextAdventureGame.ToList());
        }

        // GET: TextAdventure/TextAdventureGame/Details/5
        public ActionResult Play(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            if (textAdventureGame == null)
            {
                return HttpNotFound();
            }
            return View(textAdventureGame);
        }

        // GET: TextAdventure/TextAdventureGame/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TextAdventure/TextAdventureGame/Create
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

        // GET: TextAdventure/TextAdventureGame/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            if (textAdventureGame == null)
            {
                return HttpNotFound();
            }
            return View(textAdventureGame);
        }

        // POST: TextAdventure/TextAdventureGame/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,UserID,Published,Name,Description,GameData")] TextAdventureGame textAdventureGame)
        {
            if (ModelState.IsValid)
            {
                db.Entry(textAdventureGame).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(textAdventureGame);
        }

        // GET: TextAdventure/TextAdventureGame/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            if (textAdventureGame == null)
            {
                return HttpNotFound();
            }
            return View(textAdventureGame);
        }

        // POST: TextAdventure/TextAdventureGame/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TextAdventureGame textAdventureGame = db.TextAdventureGame.Find(id);
            db.TextAdventureGame.Remove(textAdventureGame);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

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
