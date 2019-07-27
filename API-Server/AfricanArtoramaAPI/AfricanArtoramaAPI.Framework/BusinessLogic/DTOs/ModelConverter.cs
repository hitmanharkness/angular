using AfricanArtorama.Database.Models;
using AfricanArtoramaAPI.Framework.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.DTOs
{
    public static class ModelConverter
    {
        public static Art ToArt(this ArtUploadDTO artUploadDTO, string imagePath)
        {
            var random = new Random();
            var color = String.Format("#{0:X6}", random.Next(0x1000000));

            return new Art
            {
                ArtistId = artUploadDTO.artistId,
                Name = artUploadDTO.info.title,
                Height = artUploadDTO.info.height,
                Width = artUploadDTO.info.width,
                Price = artUploadDTO.pricing.artistPrice,
                Color = color,
                ImageFileLocation = imagePath
            };
        }

        public static ArtDetail ToArtDetail(this ArtUploadDTO artUploadDTO, long artId)
        {
            var SHIPPING_AND_HANDLING = 60M;
            var PROFIT_PERCENTAGE = 1.65M;

            return new ArtDetail
            {
                ArtId = artId,
                Category = artUploadDTO.category.category,
                Subject = artUploadDTO.category.subject,
                Description = artUploadDTO.info.description,
                Depth = artUploadDTO.info.depth,
                Keywords = artUploadDTO.materials.keywords.ToStringObject(),
                Materials = artUploadDTO.materials.materials.ToStringObject(),
                Mediums = artUploadDTO.materials.mediums.ToStringObject(),
                Styles = artUploadDTO.materials.styles.ToStringObject(),
                IsFramed = artUploadDTO.packaging.isFramed.ToBool(),
                IsMultiPaned = artUploadDTO.packaging.isMultiPaned.ToBool(),
                PackageStyle = artUploadDTO.packaging.packageStyle,
                ArtistPrice = artUploadDTO.pricing.artistPrice,
                AvailableToPrint = artUploadDTO.status.availableToPrint.ToBool(),
                CopyOwner = artUploadDTO.status.copyOwner.ToBool(),
                IsOriginal = artUploadDTO.status.isOriginal.ToBool(),
                Year = artUploadDTO.status.year,
                TotalCost = (artUploadDTO.pricing.artistPrice * PROFIT_PERCENTAGE) + SHIPPING_AND_HANDLING
            };   
        }
    }
}
