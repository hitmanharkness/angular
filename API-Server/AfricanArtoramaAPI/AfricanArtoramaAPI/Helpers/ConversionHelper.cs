using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AfricanArtoramaAPI.Helpers
{
    public static class ConversionHelper
    {
        public static bool ToBool(this bool? original)
        {
            return original.HasValue ? original.Value : false;
        }

        public static string ToStringObject(this string[] array)
        {
            var builder = new StringBuilder();
            foreach(var seg in array)
            {
                builder.Append(seg);
                builder.Append(";");
            }
            return builder.ToString();
        }

        public static string[] ToStringArray(this string concatonatedList)
        {
            return concatonatedList.Split(';');
        }
    }
}
