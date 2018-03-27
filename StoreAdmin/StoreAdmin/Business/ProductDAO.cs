using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using StoreAdmin.Models;

namespace StoreAdmin.Business
{
    public class ProductDAO
    {
        public List<SearchModelRes> getAllProduct()
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rs = new List<SearchModelRes>();

                var list = from pr in db.Products
                           join supp in db.Suppliers on pr.SupplierId equals supp.Id 
                           select new SearchModelRes
                           {
                               ProductSMR = pr,
                               SupplierSMR = supp
                           };
                rs = list.ToList();
                return rs;
            }
        }
    }
}