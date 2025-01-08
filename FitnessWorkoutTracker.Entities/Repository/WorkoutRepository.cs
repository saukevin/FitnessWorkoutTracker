using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;
using LiteDB;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class WorkoutRepository : IWorkoutRepository
    {
        private readonly LiteDbContext _dbContext;
        private readonly ILiteCollection<Workout> workoutsCollection;
        private readonly ILiteCollection<Exercise> exercisesCollection;

        public WorkoutRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
            workoutsCollection = _dbContext.Context.GetCollection<Workout>(DatabaseStructure.WorkoutCollection);
            exercisesCollection = _dbContext.Context.GetCollection<Exercise>(DatabaseStructure.ExercisesCollection);
        }
        public WorkoutDTO GetWorkoutById(int workoutId) =>
            new WorkoutDTO(workoutsCollection.FindById(workoutId));

        public WorkoutDTO GetWorkoutByIdWithReferences(int workoutId) =>
            new WorkoutDTO(GetWorkoutByIdWithReferencesQuery(workoutId));

        public IList<WorkoutDTO> GetAllWorkouts()
        {
            IList<Workout> workouts = workoutsCollection
                .Query()
                .ToList();

            return workouts.Select((Workout w) => new WorkoutDTO(w)).ToList();
        }

        public IList<WorkoutDTO> GetAllWorkoutsByType(WorkoutType workoutType)
        {
            IList<Workout> workout = workoutsCollection
                .Query()
                .Where((Workout w) => w.WorkoutType == workoutType)
                .ToList();

            return workout.Select((Workout w) => new WorkoutDTO(w)).ToList();
        }

        public WorkoutDTO CreateWorkout(CreateWorkoutDTO workout)
        {
            Workout newWorkout = workout.MapToEntity();
            exercisesCollection.InsertBulk(newWorkout.Exercises);
            exercisesCollection.EnsureIndex((Exercise e) => e.Name);

            int newWorkoutId = workoutsCollection.Insert(newWorkout);
            workoutsCollection.EnsureIndex((Workout w) => w.Name);

            Workout workoutAdded = workoutsCollection.FindById(newWorkoutId);

            return new WorkoutDTO(workoutAdded);
        }

        public WorkoutDTO UpdateWorkout(UpdateWorkoutDTO workout)
        {
            Workout workoutToUpdate = GetWorkoutByIdWithReferencesQuery(workout.WorkoutId);
            Workout updated = workout.MapToUpdateEntity(workoutToUpdate);

            foreach (Exercise e in updated.Exercises)
            {
                exercisesCollection.Upsert(e);
            }

            workoutsCollection.Update(updated);

            return new WorkoutDTO(updated);
        }

        private Workout GetWorkoutByIdWithReferencesQuery(int workoutId) =>
            workoutsCollection
                .Include((Workout w) => w.Exercises)
                .FindById(workoutId);
    }
}
