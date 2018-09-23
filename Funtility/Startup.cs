using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Funtility.Startup))]
namespace Funtility
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
