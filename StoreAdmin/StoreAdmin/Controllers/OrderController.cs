using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;

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
        public JsonResult getOrder()
        {
            var list = OrdDao.getAllOrder();

            return Json(new {Data = list});
        }
    }
}