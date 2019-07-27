using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AfricanArtorama.Database.Models
{
    public class Art
    {
        public long Id { get; set; }
        public long ArtistId { get; set; }
        public String Name { get; set; }
        public Decimal Price { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string Color { get; set; }

        public string ImageFileLocation { get; set; }

        [ForeignKey("ArtistId")]
        public virtual Artist Artist { get; set; }
        public virtual ICollection<ArtDetail> Details { get; set; }
    }
}
