using AfricanArtoramaAPI.BusinessLogic.DTOs;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Models
{
    public class Art
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public String Name { get; set; }
        public Decimal Price { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string Color { get; set; }

        public string ImageId { get; set; }
        public string Image { get; set; }

        public Art(ArtUploadDTO artDTO, string imageId)
        {
            var random = new Random();
            var color = String.Format("#{0:X6}", random.Next(0x1000000));

            ImageId = imageId;
            Name = artDTO.info.title;
            Height = artDTO.info.height;
            Width = artDTO.info.width;
            Price = artDTO.pricing.artistPrice;
            Color = color;
        }
    }
}
