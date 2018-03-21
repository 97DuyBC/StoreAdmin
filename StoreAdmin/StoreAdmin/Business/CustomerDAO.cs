using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using StoreAdmin.Models;
namespace StoreAdmin.Business
{
    public class CustomerDAO
    {
        /// <summary>
        /// Đưa ra toàn bộ danh sách khách hàng
        /// </summary>
        /// <returns></returns>
        public List<Customer> getAllCustomer()
        {
            using (DataEntities db = new DataEntities())
            {
                List<Customer> list = new List<Customer>();
                list = db.Customers.Where(obj=> obj.Id <= 15).ToList();
                return list;
            }
        }
    }
}