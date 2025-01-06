using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutCourseRepository
    {
        IList<WorkoutCourseDTO> GetAllWorkoutCourses();
        WorkoutCourseDTO AddWorkoutCourse(WorkoutCourseDTO workoutCourse);
    }
}
