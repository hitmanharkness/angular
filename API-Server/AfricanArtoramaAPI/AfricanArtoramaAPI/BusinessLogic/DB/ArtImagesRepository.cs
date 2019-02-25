using AfricanArtoramaAPI.BusinessLogic.DB;
using MongoDB.Bson;
using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Repository
{
    public class ArtImagesRepository
    {
        public string Save(string image)
        {
            var array = Encoding.Default.GetBytes(image);

            var bucket = BaseDB.GetGridFSBucket("images");

            return bucket.UploadFromBytes("images", array).ToString();
        }

        public string Get(string id)
        {
            var bucket = BaseDB.GetGridFSBucket("images");

            var bsonId = new ObjectId(id);
            var array = bucket.DownloadAsBytes(bsonId);
            return Encoding.Default.GetString(array);
        }
    }
}
