using AfricanArtorama.Database;
using System;
using System.Collections.Generic;
using System.Text;

namespace AfricanArtoramaAPI
{
    public class ContextCreator
    {
        public static ArtoramaDBContext GetArtoramaContext()
        {
            //Configuration["ConnectionStrings:Default"]
            return new ArtoramaDBContext("Data Source=LAPTOP-L1K0JLN8;Initial Catalog=Artorama;User ID=ArtUser;Password=rampage11");
        }
    }
}
