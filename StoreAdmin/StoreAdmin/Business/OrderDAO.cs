using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using StoreAdmin.Models;

namespace StoreAdmin.Business
{
    public class OrderDAO
    { 
        public List<SearchModelRes> getAllOrder(SearchModelRes info , out int total)
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rs = new List<SearchModelRes>();

                var list = from cust in db.Customers
                           join ord in db.Orders on cust.Id equals ord.CustomerId
                           orderby ord.OrderDate descending
                           select new SearchModelRes
                           {
                               CustomerSMR = cust,
                               OrderSMR = ord
                           };
                total = list.Count();
                rs = list.Skip((info.pageIndex-1)*info.pageSize).Take(info.pageSize).ToList();
                return rs;
            }
        }
    }
}