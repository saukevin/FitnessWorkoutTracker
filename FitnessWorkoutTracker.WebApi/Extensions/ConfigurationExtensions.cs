using FitnessWorkoutTracker.Entities.SettingsEntities;
using System.Security.AccessControl;
using System.Security.Principal;

namespace FitnessWorkoutTracker.WebApi.Extensions
{
    public static class ConfigurationExtensions
    {
        public static void ConfigureAppSettings(this IServiceCollection services, IConfiguration config)
        {
            services.Configure<ConnectionStrings>(
                config.GetSection("ConnectionStrings")
            );
        }
    }
}
