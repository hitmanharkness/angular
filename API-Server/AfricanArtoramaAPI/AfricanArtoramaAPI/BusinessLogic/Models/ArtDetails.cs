using AfricanArtoramaAPI.BusinessLogic.DTOs;
using AfricanArtoramaAPI.Helpers;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Models
{
    public class ArtDetails
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string ArtId { get; set; }
        public string Category { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public int Depth { get; set; }
        public string[] Keywords { get; set; }
        public string[] Materials { get; set; }
        public string[] Mediums { get; set; }
        public string[] Styles { get; set; }
        public bool IsFramed { get; set; }
        public bool IsMultiPaned { get; set; }
        public string PackageStyle { get; set; }
        public decimal ArtistPrice { get; set; }
        public decimal TotalCost { get; set; }
        public bool AvailableToPrint { get; set; }
        public bool CopyOwner { get; set; }
        public bool IsOriginal { get; set; }
        public int Year { get; set; }

        public ArtDetails(ArtUploadDTO artDTO, string artId)
        {
            ArtId = artId;
            Category = artDTO.category.category;
            Subject = artDTO.category.subject;
            Description = artDTO.info.description;
            Depth = artDTO.info.depth;
            Keywords = artDTO.materials.keywords;
            Materials = artDTO.materials.materials;
            Mediums = artDTO.materials.mediums;
            Styles = artDTO.materials.styles;
            IsFramed = artDTO.packaging.isFramed.ToBool();
            IsMultiPaned = artDTO.packaging.isMultiPaned.ToBool();
            PackageStyle = artDTO.packaging.packageStyle;
            ArtistPrice = artDTO.pricing.artistPrice;
            AvailableToPrint = artDTO.status.availableToPrint.ToBool();
            CopyOwner = artDTO.status.copyOwner.ToBool();
            IsOriginal = artDTO.status.isOriginal.ToBool();
            Year = artDTO.status.year;

            var SHIPPING_AND_HANDLING = 60M;
            var PROFIT_PERCENTAGE = 1.65M;
            TotalCost = (artDTO.pricing.artistPrice * PROFIT_PERCENTAGE) + SHIPPING_AND_HANDLING;
        }
    }
}
