using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InterviewAPI.Models
{
    public class Product
    {
        [Key]
        public int productId { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string productName { get; set; }

        public int productPrice { get; set; }

        public int productQuantity { get; set; }

        public int categoryId { get; set; }
        public List<Category> category { get; set; }
        
    }
}
