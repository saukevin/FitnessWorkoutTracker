using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DbModel;
using LiteDB;
using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class ExerciseSessionRepository : IExerciseSessionRepository
    {
        private readonly LiteDbContext _dbContext;
        private readonly ILiteCollection<WorkoutSession> workoutSessionsCollection;
        private readonly ILiteCollection<ExerciseSession> exerciseSessionsCollection;

        public ExerciseSessionRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
            workoutSessionsCollection = _dbContext.Context.GetCollection<WorkoutSession>(DatabaseStructure.WorkoutSessionsCollection);
            exerciseSessionsCollection = _dbContext.Context.GetCollection<ExerciseSession>(DatabaseStructure.ExerciseSessionsCollection);
        }

        public void CompleteExerciseSession(int workoutSessionId, UpdateExerciseSessionDTO exerciseSession) 
        {
            ExerciseSession exerciseSessionToUpdate = exerciseSessionsCollection
                .FindById(exerciseSession.ExerciseSessionId);
            ExerciseSession updated = exerciseSession.MapToUpdateEntity(exerciseSessionToUpdate);

            exerciseSessionsCollection.Update(updated);

            WorkoutSession workoutSession = workoutSessionsCollection
                .Include((WorkoutSession w) => w.ExerciseSessions)
                .FindById(workoutSessionId);

            if (workoutSession.ExerciseSessions.All((ExerciseSession e) => e.IsCompleted)) 
            {
                workoutSession.IsCompleted = true;
                workoutSessionsCollection.Update(workoutSession);
            }
        }
    }
}
