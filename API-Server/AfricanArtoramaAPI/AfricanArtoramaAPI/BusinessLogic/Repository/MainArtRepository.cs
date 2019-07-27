using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using AfricanArtoramaAPI.BusinessLogic.DTOs;
using AfricanArtoramaAPI.BusinessLogic.EFRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.BusinessLogic.Repository
{
    public class MainArtRepository
    {
        private ArtoramaDBContext _context;

        public MainArtRepository(ArtoramaDBContext context)
        {
            _context = context;
        }

        public IEnumerable<Art> GetArt()
        {
            //var imageRepo = new ArtImagesRepository();
            var art = new ArtRepository(_context).Get();
            //foreach(var piece in art)
            //{
            //    if (!string.IsNullOrWhiteSpace(piece.ImageId))
            //    {
            //        piece.Image = imageRepo.Get(piece.ImageId);
            //    }
            //}

            return art;
        }

        public void SaveArt(ArtUploadDTO artDTO)
        {
            var artImageLocatoin = string.Empty;
            //new ArtImagesRepository().Save(artDTO.photo.image);
            //
            var artId = new ArtRepository(_context).Insert(artDTO.ToArt(artImageLocatoin));
            
            new ArtDetailRepository(_context).Insert(artDTO.ToArtDetail(artId));
        }
    }
}
