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

        public ExerciseRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IList<ExerciseDTO> GetAllExercisesByWorkoutId(int workoutId) 
        {
            ILiteCollection<WorkoutCourse> workoutCoursesCollection = _dbContext.Context.GetCollection<WorkoutCourse>(DatabaseStructure.WorkoutCollection);

            IList<Exercise> exercises = workoutCoursesCollection
                .Include((WorkoutCourse w) => w.Exercises)
                .FindById(workoutId)
                .Exercises;

            return exercises != null
                ? exercises
                    .Select((Exercise e) => new ExerciseDTO(e))
                    .ToList()
                : new List<ExerciseDTO>();
        }

    }
}
