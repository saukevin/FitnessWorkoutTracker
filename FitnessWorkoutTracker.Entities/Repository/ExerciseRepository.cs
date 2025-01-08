using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;
using LiteDB;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly LiteDbContext _dbContext;
        ILiteCollection<Workout> workoutCollection;
        ILiteCollection<Exercise> exerciseCollection;

        public ExerciseRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
            workoutCollection = _dbContext.Context.GetCollection<Workout>(DatabaseStructure.WorkoutCollection);
            exerciseCollection = _dbContext.Context.GetCollection<Exercise>(DatabaseStructure.ExercisesCollection);
        }

        public ExerciseDTO GetById(int exerciseId)
        {
            return new ExerciseDTO(exerciseCollection
                .FindById(exerciseId));
        }

        public IList<ExerciseDTO> GetAllExercisesByWorkoutId(int workoutId)
        {
            IList<Exercise> exercises = workoutCollection
                .Include((Workout w) => w.Exercises)
                .FindById(workoutId)
                .Exercises;

            return exercises
                .Select((Exercise e) => new ExerciseDTO(e))
                .ToList();
        }
    }
}
