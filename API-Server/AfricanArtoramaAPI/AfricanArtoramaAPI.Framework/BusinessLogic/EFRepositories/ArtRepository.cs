using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using System.Collections.Generic;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories
{
    public class ArtRepository
    {
        public IEnumerable<Art> Get()
        {
            var context = new ArtoramaDBContext();
            var stuff = context.Arts;
            return stuff;
        }

        public long Insert(Art art)
        {
            var context = new ArtoramaDBContext();
            context.Arts.Add(art);
            context.SaveChanges();
            return art.Id;
        }
    }
}