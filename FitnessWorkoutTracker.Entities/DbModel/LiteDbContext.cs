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

            BsonMapper.Global.Entity<Workout>()
                .Id((Workout w) => w.WorkoutId)
                .DbRef((Workout w) => w.Exercises, DatabaseStructure.ExercisesCollection)
                .DbRef((Workout w) => w.WorkoutSessions, DatabaseStructure.WorkoutSessionsCollection);

            BsonMapper.Global.Entity<Exercise>()
                .Id((Exercise e) => e.ExerciseId);

            BsonMapper.Global.Entity<WorkoutSession>()
                .Id((WorkoutSession w) => w.WorkoutSessionId)
                .DbRef((WorkoutSession w) => w.ExerciseSessions, DatabaseStructure.ExerciseSessionsCollection);

            BsonMapper.Global.Entity<ExerciseSession>()
                .Id((ExerciseSession e) => e.ExerciseSessionId);
        }

    }
}
