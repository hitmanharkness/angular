using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using AfricanArtoramaAPI.Framework.BusinessLogic.DTOs;
using AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.Repository
{
    public class MainArtRepository
    {
        public IEnumerable<ArtDTO> GetArt()
        {
            var imageRepo = new ArtImagesRepository();
            var art = new ArtRepository().Get();
            var dtos = new List<ArtDTO>();
            foreach(var piece in art)
            {
                string image = null;
                if (!string.IsNullOrWhiteSpace(piece.ImageFileLocation))
                {
                    image = imageRepo.Get(piece.ImageFileLocation);
                }
                dtos.Add(new ArtDTO(piece, image));
            }

            return dtos;
        }

        public void SaveArt(ArtUploadDTO artDTO)
        {
            var artist = new ArtistRepository().GetArtist(artDTO.artistId);

            var artImageLocation = new ArtImagesRepository().Save(artDTO.photo.image, artist.Handle, artDTO.photo.fileName);

            var artId = new ArtRepository().Insert(artDTO.ToArt(artImageLocation));
            
            new ArtDetailRepository().Insert(artDTO.ToArtDetail(artId));
        }
    }
}
