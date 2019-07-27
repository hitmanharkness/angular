using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;

namespace AfricanArtoramaAPI.BusinessLogic.EFRepositories
{
    public class ArtDetailRepository
    {
        ArtoramaDBContext _context;

        public ArtDetailRepository(ArtoramaDBContext context)
        {
            _context = context;
        }

        public long Insert(ArtDetail artDetails)
        {
            _context.ArtDetails.Add(artDetails);
            _context.SaveChanges();
            return artDetails.Id;
        }
    }
}