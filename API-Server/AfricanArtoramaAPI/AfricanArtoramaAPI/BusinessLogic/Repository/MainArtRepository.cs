using AfricanArtoramaAPI.BusinessLogic.DTOs;
using AfricanArtoramaAPI.BusinessLogic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Repository
{
    public class MainArtRepository
    {
        public IEnumerable<Art> GetArt()
        {
            var imageRepo = new ArtImagesRepository();
            var art = new ArtRepository().Get();
            foreach(var piece in art)
            {
                if (!string.IsNullOrWhiteSpace(piece.ImageId))
                {
                    piece.Image = imageRepo.Get(piece.ImageId);
                }
            }

            return art;
        }

        public void SaveArt(ArtUploadDTO artDTO)
        {
            var artImageId = new ArtImagesRepository().Save(artDTO.photo.image);

            var artId = new ArtRepository().Insert(new Art(artDTO, artImageId));
            
            new ArtDetailsRepository().Insert(new ArtDetails(artDTO, artId));
        }
    }
}
