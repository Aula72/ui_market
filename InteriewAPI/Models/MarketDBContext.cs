using Microsoft.EntityFrameworkCore;
namespace InterviewAPI.Models
{
    public class MarketDBContext:DbContext
    {
        public MarketDBContext(DbContextOptions<MarketDBContext> options) : base(options)
        {
           
        }
        public DbSet<Seller> Sellers { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

    }
}
