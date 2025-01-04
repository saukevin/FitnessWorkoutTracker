using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel;
using FitnessWorkoutTracker.Entities.Repository;

namespace FitnessWorkoutTracker.WebApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddApplicationRegistrations(this IServiceCollection services) 
        {
            services.AddTransient<IWorkoutCourseRepository, WorkoutCourseRepository>();
            services.AddTransient<IExerciseRepository, ExerciseRepository>();
            services.AddTransient<IExercisePerformanceRepository, ExercisePerformanceRepository>();

            services.AddSingleton<LiteDbContext, LiteDbContext>();
        }
    }
}
