using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;
using StoreAdmin.Models;

namespace StoreAdmin.Controllers
{
    public class OrderController : Controller
    {
        // GET: Order
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Add()
        {
            return View();
        }

        OrderDAO OrdDao = new OrderDAO();

        [HttpPost]
        public JsonResult getOrder(SearchModelRes info)
        {
            int total = 0;
            var list = OrdDao.getAllOrder(info ,out total);

            return Json(new {Data = list, Total = total, Message = "Success" });
        }
    }
}