using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace InterviewAPI.Models
{
    public class Seller
    {
        [Key]
        public int sellerID { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string sellerName { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string sellerLocation { get; set;  }
    }
}
