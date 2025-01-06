using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;
using LiteDB;

namespace FitnessWorkoutTracker.Entities.Repository
{
    public class WorkoutCourseRepository : IWorkoutCourseRepository
    {
        private readonly LiteDbContext _dbContext;
        private readonly ILiteCollection<WorkoutCourse> workoutCoursesCollection;
        private readonly ILiteCollection<Exercise> exercisesCollection;

        public WorkoutCourseRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
            workoutCoursesCollection = _dbContext.Context.GetCollection<WorkoutCourse>(DatabaseStructure.WorkoutCollection);
            exercisesCollection = _dbContext.Context.GetCollection<Exercise>(DatabaseStructure.ExercisesCollection);
        }

        public WorkoutCourseDTO GetWorkoutCourseById(int workoutId) =>
            new WorkoutCourseDTO(workoutCoursesCollection.FindById(workoutId));

        public IList<WorkoutCourseDTO> GetAllWorkoutCourses()
        {
            var courses = workoutCoursesCollection
                .Query()
                .ToList();

            return courses.Select((WorkoutCourse w) => new WorkoutCourseDTO(w)).ToList();

        }

        public WorkoutCourseDTO AddWorkoutCourse(CreateWorkoutCourseDTO workoutCourse)
        {
            WorkoutCourse newWorkoutCourse = workoutCourse.MapToEntity();
            exercisesCollection.InsertBulk(newWorkoutCourse.Exercises);
            exercisesCollection.EnsureIndex((Exercise e) => e.Name);

            int newWorkoutCourseId = workoutCoursesCollection.Insert(newWorkoutCourse);
            workoutCoursesCollection.EnsureIndex((WorkoutCourse w) => w.Name);

            WorkoutCourse workoutAdded = workoutCoursesCollection.FindById(newWorkoutCourseId);

            return new WorkoutCourseDTO(workoutAdded);
        }
    }
}
