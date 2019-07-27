using MongoDB.Bson;
using System.Text;

namespace AfricanArtoramaAPI.BusinessLogic.MongoDB
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
