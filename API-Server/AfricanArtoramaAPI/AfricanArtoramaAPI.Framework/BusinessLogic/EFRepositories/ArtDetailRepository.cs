using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories
{
    public class ArtDetailRepository
    {
        public long Insert(ArtDetail artDetails)
        {
            var context = new ArtoramaDBContext();
            context.ArtDetails.Add(artDetails);
            context.SaveChanges();
            return artDetails.Id;
        }
    }
}