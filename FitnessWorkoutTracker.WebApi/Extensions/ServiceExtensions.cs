using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel;
using FitnessWorkoutTracker.Entities.Repository;

namespace FitnessWorkoutTracker.WebApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddApplicationRegistrations(this IServiceCollection services) 
        {
            services.AddTransient<IWorkoutRepository, WorkoutRepository>();
            services.AddTransient<IExerciseRepository, ExerciseRepository>();
            services.AddTransient<IWorkoutSessionRepository, WorkoutSessionRepository>();
            services.AddTransient<IExerciseSessionRepository, ExerciseSessionRepository>();
            services.AddTransient<DataSeeder, DataSeeder>();

            services.AddSingleton<LiteDbContext, LiteDbContext>();
        }
    }
}
