using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AfricanArtorama.Database.Models
{
    public class ArtDetail
    {
        public long Id { get; set; }
        public long ArtId { get; set; }
        public string Category { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public int Depth { get; set; }
        public string Keywords { get; set; }
        public string Materials { get; set; }
        public string Mediums { get; set; }
        public string Styles { get; set; }
        public bool IsFramed { get; set; }
        public bool IsMultiPaned { get; set; }
        public string PackageStyle { get; set; }
        public decimal ArtistPrice { get; set; }
        public decimal TotalCost { get; set; }
        public bool AvailableToPrint { get; set; }
        public bool CopyOwner { get; set; }
        public bool IsOriginal { get; set; }
        public int Year { get; set; }

        [ForeignKey("ArtId")]
        public virtual Art Art { get; set; }
    }
}
