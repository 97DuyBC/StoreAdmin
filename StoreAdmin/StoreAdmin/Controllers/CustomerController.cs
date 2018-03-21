using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;

namespace StoreAdmin.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult Index()
        {
            return View();
        }

        CustomerDAO Dao = new CustomerDAO();

        [HttpPost]
        public JsonResult getAllCustomer()
        {
            var list = Dao.getAllCustomer();
            return Json(new {Data = list});
        }
    }
}