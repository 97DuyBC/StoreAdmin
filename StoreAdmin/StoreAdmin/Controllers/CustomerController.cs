using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreAdmin.Business;
using StoreAdmin.Models;

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
        public JsonResult getCustomer(SearchModelRes info)
        {
            int total = 0;
            var list = CusDao.getAllCustomer(info ,out total);
            return Json(new { Data = list, Total = total, Message = "Success" });
        }

        public JsonResult seachCusomer(String seachName)
        {
            var list = CusDao.seachCustumer(seachName);
            int a = list.Count();
            return Json(new { Data = list, Message = "Success", Total = a });
        }
    }
}