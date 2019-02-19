using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.Helpers
{
    public static class ConversionHelper
    {
        public static bool ToBool(this bool? original)
        {
            return original.HasValue ? original.Value : false;
        }
    }
}
