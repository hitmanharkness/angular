using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using System.Collections.Generic;

namespace AfricanArtoramaAPI.BusinessLogic.EFRepositories
{
    public class ArtRepository
    {
        ArtoramaDBContext _context;

        public ArtRepository(ArtoramaDBContext context)
        {
            _context = context;
        }

        public IEnumerable<Art> Get()
        {
            var stuff = _context.Arts;
            return stuff;
        }

        public long Insert(Art art)
        {
            _context.Arts.Add(art);
            _context.SaveChanges();
            return art.Id;
        }
    }
}