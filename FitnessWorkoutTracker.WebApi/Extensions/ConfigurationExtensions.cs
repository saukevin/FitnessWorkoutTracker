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

        public static void ConfigureDatabaseTempFolderAndGrantPermissions(this IServiceCollection services, IConfiguration config)
        {
            string directoryName = @"C:\FitnessWorkoutTracker";

            if(!Directory.Exists(directoryName))
            {
                Console.WriteLine("Creating directory to store Database");
                Directory.CreateDirectory(directoryName);
            }

            // Get directory access info
            DirectoryInfo dinfo = new DirectoryInfo(directoryName);
            DirectorySecurity dSecurity = dinfo.GetAccessControl();

            // Add the FileSystemAccessRule to the security settings. 
            dSecurity.AddAccessRule(
                new FileSystemAccessRule(
                    new SecurityIdentifier(WellKnownSidType.WorldSid, null), 
                    FileSystemRights.FullControl,
                    InheritanceFlags.ObjectInherit | InheritanceFlags.ContainerInherit,
                    PropagationFlags.NoPropagateInherit,
                    AccessControlType.Allow
                )
            );

            // Set the access control
            dinfo.SetAccessControl(dSecurity);
        }
    }
}
