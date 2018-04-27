using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;
using StoreAdmin.Models;

namespace StoreAdmin.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Seach()
        {
            return View();
        }

        ProductDAO PrDAO = new ProductDAO();

        [HttpPost]
        public JsonResult getAllProduct(SearchModelRes info)
        {
            int total = 0;
            var message = "Successful";
            var list = PrDAO.getAllProduct(info, out total);
            return Json(new { Data = list, Total = total, Message = message });
        }

        public JsonResult seachProduct(SearchModelRes info)
        {
            int total = 0;
            var message = "Successful";

            var list = PrDAO.seachProductName(info, out total);
            return Json(new { Data = list, Message = message, Total = total });
        }
    }
}