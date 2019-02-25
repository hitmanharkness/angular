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
