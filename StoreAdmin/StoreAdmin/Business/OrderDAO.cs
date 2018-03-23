using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using StoreAdmin.Models;

namespace StoreAdmin.Business
{
    public class OrderDAO
    {
        public List<SearchModelRes> getAllOrder()
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rs = new List<SearchModelRes>();

                var list = from cust in db.Customers
                           join ord in db.Orders on cust.Id equals ord.CustomerId
                           select new SearchModelRes
                           {
                               CustomerSMR = cust,
                               OrderSMR = ord
                           };
                rs = list.ToList();
                return rs;
            }
        }
    }
}