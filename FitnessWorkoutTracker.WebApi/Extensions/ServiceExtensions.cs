using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.Repository;

namespace FitnessWorkoutTracker.WebApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddRepositoryRegistrations(this IServiceCollection services) 
        {
            services.AddTransient<IWorkoutCourseRepository, WorkoutCourseRepository>();
            services.AddTransient<IExerciseRepository, ExerciseRepository>();
            services.AddTransient<IExercisePerformanceRepository, ExercisePerformanceRepository>();
        }
    }
}
