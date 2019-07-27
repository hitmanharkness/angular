using AfricanArtorama.Database.Models;
using System.Data.Entity;

namespace AfricanArtorama.Database
{
    public partial class ArtoramaDBContext : DbContext
    {
        //public ArtoramaDBContext()
        //    : base("Name=Default")//this is the connection string name
        //{
        //}

        public ArtoramaDBContext()
            : base("name=ArtConnectionString")
        {
            System.Data.Entity.Database.SetInitializer<ArtoramaDBContext>(new DbInitializer());
        }

        public DbSet<Art> Arts { get; set; }
        public DbSet<ArtDetail> ArtDetails { get; set; }
        public DbSet<Artist> Artists { get; set; }
    }
}
