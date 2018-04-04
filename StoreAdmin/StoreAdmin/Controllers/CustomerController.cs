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
        public ActionResult Add()
        {
            return View();
        }

        CustomerDAO CusDao = new CustomerDAO();

        [HttpPost]

        /// <summary>
        /// danh sách toàn bộ khách hàng
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        public JsonResult getCustomer(SearchModelRes info)
        {
            int total = 0;
            var list = CusDao.getAllCustomer(info ,out total);
            return Json(new { Data = list, Total = total, Message = "Success" });
        }
        /// <summary>
        /// Tìm kiếm theo tên khách hàng
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        public JsonResult seachCusomer(SearchModelRes info)
        {
            int total = 0;
            var list = CusDao.seachCustumer(info, out total);
            return Json(new { Data = list, Message = "Success", Total = total});
        }
        /// <summary>
        /// thêm khách hàng
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        public JsonResult insertCustomer(SearchModelRes info)
        {
            var Message = "Fail";
            var val = CusDao.insertCustomer(info);
            if (val == true)
            {
                Message = "Successful";
            }
            return Json(new {Message = Message });
        }
    }
}