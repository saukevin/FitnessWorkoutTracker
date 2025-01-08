using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DbModel;
using LiteDB;
using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class WorkoutSessionRepository : IWorkoutSessionRepository
    {
        private readonly LiteDbContext _dbContext;
        private readonly ILiteCollection<Workout> workoutCollection;
        private readonly ILiteCollection<WorkoutSession> workoutSessionsCollection;
        private readonly ILiteCollection<ExerciseSession> exerciseSessionsCollection;

        public WorkoutSessionRepository(LiteDbContext dbContext) 
        {
            _dbContext = dbContext;
            workoutCollection = _dbContext.Context.GetCollection<Workout>(DatabaseStructure.WorkoutCollection);
            workoutSessionsCollection = _dbContext.Context.GetCollection<WorkoutSession>(DatabaseStructure.WorkoutSessionsCollection);
            exerciseSessionsCollection = _dbContext.Context.GetCollection<ExerciseSession>(DatabaseStructure.ExerciseSessionsCollection);
        }

        public WorkoutSessionDTO GetById(int workoutSessionId)
        {
            WorkoutSession workoutSession = workoutSessionsCollection
                .Include((WorkoutSession w) => w.ExerciseSessions)
                .FindById(workoutSessionId);

            return new WorkoutSessionDTO(workoutSession);
        }

        public List<WorkoutSessionDTO> GetAllByCompleted(bool completed) 
        {
            IList<WorkoutSession> workoutSessions = workoutSessionsCollection
                .Include((WorkoutSession w) => w.ExerciseSessions)
                .Query()
                .Where((WorkoutSession w) => w.IsCompleted == completed)
                .ToList();

            return workoutSessions
                .Select((WorkoutSession w) => new WorkoutSessionDTO(w))
                .ToList();
        }

        public WorkoutSessionDTO CreateWorkoutSession(int workoutId) 
        {
            Workout workout = workoutCollection
                .Include((Workout w) => w.Exercises)
                .FindById(workoutId);

            List<ExerciseSession> exerciseSessions = workout.Exercises
                .Select((Exercise e) => new ExerciseSession() 
                    { 
                        Exercise = e,
                        IsCompleted = false 
                    }
                )
                .ToList();

            WorkoutSession newWorkoutSession = new WorkoutSession() 
            {
                WorkoutName = workout.Name,
                StartDate = DateOnly.FromDateTime(DateTime.Now),
                IsCompleted = false,
                ExerciseSessions = exerciseSessions,
            };

            exerciseSessionsCollection.InsertBulk(exerciseSessions);

            workoutCollection.Update(workout);
            int newWorkoutSessionId = workoutSessionsCollection.Insert(newWorkoutSession);

            WorkoutSession workoutSessionAdded = workoutSessionsCollection
                .Include((WorkoutSession w) => w.ExerciseSessions)
                .FindById(newWorkoutSessionId);

            return new WorkoutSessionDTO(workoutSessionAdded);
        }

        public void DeleteById(int workoutSessionId) 
        {
            WorkoutSession workoutSession = workoutSessionsCollection
               .Include((WorkoutSession w) => w.ExerciseSessions)
               .FindById(workoutSessionId);

            IEnumerable<int> exerciseSessionIds = workoutSession.ExerciseSessions
                .Select((ExerciseSession e) => e.ExerciseSessionId);

            exerciseSessionsCollection.DeleteMany((ExerciseSession e) => exerciseSessionIds.Contains(e.ExerciseSessionId));
            workoutSessionsCollection.Delete(workoutSessionId);
        }
    }
}