using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.SettingsEntities;
using LiteDB;
using Microsoft.Extensions.Options;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class WorkoutCourseRepository : IWorkoutCourseRepository
    {
        public readonly ConnectionStrings _connectionStrings;

        public WorkoutCourseRepository(IOptions<ConnectionStrings> connectionStrings) 
        {
            _connectionStrings = connectionStrings.Value;
        }
    }
}
