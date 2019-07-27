using AfricanArtorama.Database.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace AfricanArtorama.Database
{
    public class DbInitializer : DropCreateDatabaseIfModelChanges<ArtoramaDBContext>
    {
        protected override void Seed(ArtoramaDBContext context)
        {
            var artist = new Artist
            {
                FirstName = "Mike",
                LastName = "Jordan"
            };
            context.Artists.Add(artist);
        }
    }
}
