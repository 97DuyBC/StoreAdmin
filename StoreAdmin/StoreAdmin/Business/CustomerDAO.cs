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
        /// <returns>List<Customer></returns>
        public List<Customer> getAllCustomer()
        {
            using (var db = new DataEntities())
            {
                return db.Customers.ToList();
            }
        }
    }
}