using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.SettingsEntities;
using LiteDB;
using Microsoft.Extensions.Options;

namespace FitnessWorkoutTracker.Entities.DbModel
{
    public class LiteDbContext
    {
        public readonly LiteDatabase Context;
        private readonly ConnectionStrings _connectionStrings;

        public LiteDbContext(IOptions<ConnectionStrings> connectionStrings)
        {
            _connectionStrings = connectionStrings.Value;
            try
            {
                LiteDatabase dbContext = new LiteDatabase(_connectionStrings.DefaultConnection);
                if (dbContext != null)
                    Context = dbContext;
            }
            catch (Exception ex)
            {
                throw new Exception("Error while creating Database Context", ex);
            }

            BsonMapper.Global.Entity<WorkoutCourse>()
                   .Id((WorkoutCourse w) => w.WorkoutCourseId)
                   .DbRef((WorkoutCourse w) => w.Exercises, DatabaseStructure.ExercisesCollection);
            BsonMapper.Global.Entity<Exercise>()
                   .Id((Exercise e) => e.ExerciseId)
                   .DbRef((Exercise e) => e.ExercisePerformances, DatabaseStructure.ExercisePerformancesCollection);
            BsonMapper.Global.Entity<ExercisePerformance>()
                   .Id((ExercisePerformance e) => e.ExercisePerformanceId);
        }

    }
}
