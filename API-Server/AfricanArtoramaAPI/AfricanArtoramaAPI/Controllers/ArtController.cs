using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AfricanArtoramaAPI.BusinessLogic.DTOs;
using AfricanArtoramaAPI.BusinessLogic.Models;
using AfricanArtoramaAPI.BusinessLogic.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AfricanArtoramaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtController : ControllerBase
    {
        // GET api/art
        [HttpGet]
        public IEnumerable<Art> Get()
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
        [HttpPost]
        public void Post([FromBody] ArtUploadDTO artDTO)
        {
            new MainArtRepository().SaveArt(artDTO);
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
