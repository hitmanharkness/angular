using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using AfricanArtorama.Database;
using AfricanArtorama.Database.Models;
using AfricanArtoramaAPI.Framework.BusinessLogic.DTOs;
using AfricanArtoramaAPI.Framework.BusinessLogic.Repository;
using Newtonsoft.Json;

namespace AfricanArtoramaAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ArtController : ApiController
    {
        // GET api/art
        public IEnumerable<ArtDTO> Get()
        {
            return new MainArtRepository().GetArt();
        }

        // GET api/values/5
        //[HttpGet("{id}")]
        //public ActionResult<string> Get(int id)
        //{
        //    return "value";
        //}

        // POST api/art
        //public void Post([FromBody] ArtUploadDTO artDTO)
        public void Post([FromBody] ArtUploadDTO artDTORaw)
        {
            new MainArtRepository().SaveArt(artDTORaw);
        }

        // PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
