using AfricanArtoramaAPI.BusinessLogic.Models;
using MongoDB.Driver;

namespace AfricanArtoramaAPI.BusinessLogic.MongoDB
{
    public class ArtDetailsRepository
    {
        private IMongoCollection<ArtDetails> collection
        {
            get
            {
                return BaseDB.GetCollection<ArtDetails>("ArtDetails");
            }
        }

        public string Insert(ArtDetails artDetails)
        {
            collection.InsertOne(artDetails);
            return artDetails.Id.ToString();
        }
    }
}
