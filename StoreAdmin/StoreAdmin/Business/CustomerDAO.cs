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

        public List<SearchModelRes> seachCustumer(String seachName)
        {
            using (var db = new DataEntities())
            { 
                List<SearchModelRes> rs = new List<SearchModelRes>();
                var list = from cust in db.Customers
                           where ((cust.FirstName + cust.LastName).Contains(seachName))
                           orderby cust.FirstName ascending, cust.LastName ascending
                           select (new SearchModelRes {
                               CustomerSMR = cust
                           });
                rs = list.ToList();
                return rs;
            }
        }
    }
}