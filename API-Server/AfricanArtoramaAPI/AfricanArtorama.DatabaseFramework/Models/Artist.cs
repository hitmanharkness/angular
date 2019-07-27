using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using System.Web.Script.Serialization;

namespace AfricanArtorama.Database.Models
{
    public class Artist
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Handle { get; set; }

        [JsonIgnore]
        public virtual ICollection<Art> Art { get; set; }
    }
}
