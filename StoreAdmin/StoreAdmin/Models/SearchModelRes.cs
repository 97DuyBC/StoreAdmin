using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StoreAdmin.Models
{
    public class SearchModelRes
    {
        public Customer CustomerSMR { set; get; }
        public Order OrderSMR { set; get; }
        public Product ProductSMR { get; set; }
        public Supplier SupplierSMR { get; set; }
    }
}