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
        public List<SearchModelRes> getAllCustomer(SearchModelRes info, out int total)
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rs = new List<SearchModelRes>();
                total = 0;
                var list = from cust in db.Customers
                           orderby cust.Id
                           select new SearchModelRes
                           {
                               CustomerSMR = cust
                           };
                total = list.Count();
                rs = list.Skip((info.pageIndex-1) * info.pageSize).Take(info.pageSize).ToList(); ;
                return rs;
            }
        }

        public List<SearchModelRes> seachCustumer(SearchModelRes info, out int total)
        {
            using (var db = new DataEntities())
            { 
                
                List<SearchModelRes> rs = new List<SearchModelRes>();
                var list = from cust in db.Customers
                           where ((cust.FirstName +" "+ cust.LastName).Contains(info.CustomerSMR.FirstName))
                           orderby cust.FirstName ascending, cust.LastName ascending
                           select (new SearchModelRes {
                               CustomerSMR = cust
                           });
                total = list.Count();
                rs = list.Skip((info.pageIndex - 1)*info.pageSize).Take(info.pageSize).ToList();
                return rs;
            }
        }

        public Boolean insertCustomer(SearchModelRes info)
        {
            using(var db = new DataEntities())
            {
                db.Customers.Add(info.CustomerSMR);
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}