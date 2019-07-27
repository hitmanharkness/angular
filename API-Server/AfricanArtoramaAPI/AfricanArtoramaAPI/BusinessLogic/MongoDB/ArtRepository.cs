using AfricanArtoramaAPI.BusinessLogic.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace AfricanArtoramaAPI.BusinessLogic.MongoDB
{
    public class ArtRepository
    {
        private IMongoCollection<Art> collection
        {
            get
            {
                return BaseDB.GetCollection<Art>("Art");
            }
        }

        public IEnumerable<Art> Get()
        {
            var stuff = collection.Find(new BsonDocument()).ToList();
            return stuff;
        }

        public string Insert(Art art)
        {
            collection.InsertOne(art);
            return art.Id.ToString(); 
        }
    }
}
