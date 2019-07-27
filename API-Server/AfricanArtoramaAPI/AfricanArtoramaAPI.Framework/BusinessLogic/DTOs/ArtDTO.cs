using AfricanArtorama.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.DTOs
{
    public class ArtDTO
    {
        public long Id { get; set; }
        public long ArtistId { get; set; }
        public String Name { get; set; }
        public Decimal Price { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string Color { get; set; }
        public string Image { get; set; }

        public ArtDTO(Art art, string image)
        {
            Id = art.Id;
            ArtistId = art.ArtistId;
            Name = art.Name;
            Price = art.Price;
            Height = art.Height;
            Width = art.Width;
            Color = art.Color;
            Image = image;
        }
    }
}