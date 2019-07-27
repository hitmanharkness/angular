using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories
{
    public class ArtistRepository
    {
        public IEnumerable<Artist> GetArtists()
        {
            var context = new ArtoramaDBContext();
            return context.Artists;
        }

        public Artist GetArtist(long artistId)
        {
            return new ArtoramaDBContext().Artists.Single(a => a.Id == artistId);
        }
    }
}