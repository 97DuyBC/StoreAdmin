using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using StoreAdmin.Models;

namespace StoreAdmin.Business
{
    public class ProductDAO
    {
        public List<SearchModelRes> getAllProduct(SearchModelRes info, out int total)
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rs = new List<SearchModelRes>();

                var list = from pr in db.Products
                           join supp in db.Suppliers on pr.SupplierId equals supp.Id 
                           orderby pr.Id
                           select new SearchModelRes
                           {
                               ProductSMR = pr,
                               SupplierSMR = supp
                           };
                total = list.Count();
                rs = list.Skip((info.pageIndex-1)*info.pageSize).Take(info.pageSize).ToList();
                return rs;
            }
        }

        public List<SearchModelRes> seachProductName(SearchModelRes info, out int total)
        {
            using (var db = new DataEntities())
            {
                List<SearchModelRes> rp = new List<SearchModelRes>();
                var list = from pr in db.Products
                           join supp in db.Suppliers on pr.SupplierId equals supp.Id
                           where pr.ProductName.Contains(info.ProductSMR.ProductName)
                           orderby pr.Id
                           select (new SearchModelRes
                           {
                               ProductSMR = pr,
                               SupplierSMR = supp
                           });
                total = list.Count();
                rp = list.Skip((info.pageIndex - 1) * info.pageSize).Take(info.pageSize).ToList();
                return rp;
            }
        }
    }
}