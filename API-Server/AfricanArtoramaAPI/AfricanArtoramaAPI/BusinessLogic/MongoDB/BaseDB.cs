using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.MongoDB
{
    public static class BaseDB
    {
        public static IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return getDB().GetCollection<T>(collectionName);
        }
        
        public static IGridFSBucket GetGridFSBucket(string name)
        {
            var options = new GridFSBucketOptions
            {
                BucketName = name
            };
            return new GridFSBucket(getDB(), options);
        }

        private static IMongoDatabase getDB()
        {
            MongoClient dbClient = new MongoClient("mongodb://localhost:27017");

            IMongoDatabase db = dbClient.GetDatabase("AfricanArtorama");
            return db;
        }
    }
}
