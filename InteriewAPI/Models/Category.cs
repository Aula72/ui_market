using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InterviewAPI.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName="nvarchar(50)")]
        public string categoryName { get; set; }
        [Column(TypeName ="nvarchar(10)")]
        public string units { get; set; }

        public int sellerId { get; set; }
        //public Seller seller { get; set; }
        public List<Seller> seller { get; set; }

    }
}
