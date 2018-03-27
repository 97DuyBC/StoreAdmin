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

        public ActionResult Seach()
        {
            return View();
        }

        CustomerDAO CusDao = new CustomerDAO();

        [HttpPost]      
        public JsonResult getCustomer()
        {
            var list = CusDao.getAllCustomer();
            return Json(new {Data = list});
        }

        public JsonResult seachCusomer(String seachName)
        {
            var list = CusDao.seachCustumer(seachName);
            return Json(new { Data = list, Message = "Success" });
        }
    }
}