using System.Web;
using System.Web.Mvc;

namespace AfricanArtoramaAPI.Framework
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
