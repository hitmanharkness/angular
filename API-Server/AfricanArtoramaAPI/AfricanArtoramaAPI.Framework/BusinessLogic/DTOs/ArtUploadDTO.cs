using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.Framework.BusinessLogic.DTOs
{
    public class ArtUploadDTO
    {
        public long artistId { get; set; }
        public CategoryDTO category { get; set; }
        public InfoDTO info { get; set; }
        public MaterialsDTO materials { get; set; }
        public PackagingDTO packaging { get; set; }
        public PhotoDTO photo { get; set; }
        public PricingDTO pricing { get; set; }
        public ShippingDTO shipping { get; set; }
        public StatusDTO status { get; set; }
    }

    public class CategoryDTO
    {
        public string category { get; set; }
        public string subject { get; set; }
    }

    public class InfoDTO
    {
        public string description { get; set; }
        public string title { get; set; }
        public int height { get; set; }
        public int width { get; set; }
        public int depth { get; set; }
    }

    public class MaterialsDTO
    {
        public string[] keywords { get; set; }
        public string[] materials { get; set; }
        public string[] mediums { get; set; }
        public string[] styles { get; set; }
    }

    public class PhotoDTO
    {
        public string fileName { get; set; }
        public string image { get; set; }
        public object saveEvent { get;set; }
    }

    public class PackagingDTO
    {
        public bool? isFramed { get; set; }
        public bool? isMultiPaned { get; set; }
        public string packageStyle { get; set; }
    }

    public class PricingDTO
    {
        public decimal artistPrice { get; set; }
    }

    public class ShippingDTO
    {
        public string address { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string state { get; set; }
        public double weight { get; set; }
        public int zip { get; set; }
    }

    public class StatusDTO
    {
        public bool? availableToPrint { get; set; }
        public bool? copyOwner { get; set; }
        public bool? isOriginal { get; set; }
        public int year { get; set; }
    }
}
