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

        public WorkoutCourseRepository(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IList<WorkoutCourseDTO> GetAllWorkoutCourses()
        {
            ILiteCollection<WorkoutCourse> workoutCoursesCollection = _dbContext.Context.GetCollection<WorkoutCourse>("WorkoutCourses");
            var courses = workoutCoursesCollection
                .Query()
                .ToList();

            return courses.Select(w => new WorkoutCourseDTO(w)).ToList();

        }

        public WorkoutCourseDTO AddWorkoutCourse(WorkoutCourseDTO workoutCourse)
        {
            ILiteCollection<WorkoutCourse> workoutCourses = _dbContext.Context.GetCollection<WorkoutCourse>("WorkoutCourses");

            WorkoutCourse newWorkoutCourse = workoutCourse.MapToEntity();
            workoutCourses.Insert(newWorkoutCourse);

            workoutCourses.EnsureIndex(w => w.Name);

            return workoutCourse;
        }
    }
}
