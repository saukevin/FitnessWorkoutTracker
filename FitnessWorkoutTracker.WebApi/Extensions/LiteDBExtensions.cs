﻿using FitnessWorkoutTracker.Entities.SettingsEntities;
using System.Security.AccessControl;
using System.Security.Principal;

namespace FitnessWorkoutTracker.WebApi.Extensions
{
    public static class LiteDBExtensions
    {
        public static void CreateDatabaseTempFolderAndGrantPermissions(this IServiceCollection services, IConfiguration config)
        {
            string directoryName = @"C:\FitnessWorkoutTracker";

            if(!Directory.Exists(directoryName))
            {
                try
                {
                    Directory.CreateDirectory(directoryName);
                } catch(Exception ex) 
                {
                    Console.WriteLine("Error while creating Database temp folder...");
                }

                Console.WriteLine("Database folder successfully created");
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