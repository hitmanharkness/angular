using AfricanArtoramaAPI.BusinessLogic.DB;
using AfricanArtoramaAPI.BusinessLogic.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Repository
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
