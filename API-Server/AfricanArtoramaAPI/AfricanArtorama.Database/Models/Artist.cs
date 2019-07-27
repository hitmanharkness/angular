using System;
using System.Collections.Generic;
using System.Text;

namespace AfricanArtorama.Database.Models
{
    public class Artist
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        public virtual ICollection<Art> Art { get; set; }
    }
}
