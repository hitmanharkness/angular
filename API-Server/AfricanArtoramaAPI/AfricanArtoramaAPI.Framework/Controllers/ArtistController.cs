using AfricanArtorama.Database.Models;
using AfricanArtoramaAPI.Framework.BusinessLogic.EFRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AfricanArtoramaAPI.Framework.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ArtistController : ApiController
    {
        public IEnumerable<Artist> Get()
        {
            var artist =  new ArtistRepository().GetArtists().ToList();
            return artist;
        }
    }
}