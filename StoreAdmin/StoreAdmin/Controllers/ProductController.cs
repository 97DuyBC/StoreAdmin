using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;

namespace StoreAdmin.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        ProductDAO PrDAO = new ProductDAO();

        [HttpPost]
        public JsonResult getAllProduct()
        {
            var list = PrDAO.getAllProduct();
            return Json(new { Data = list });
        }
    }
}