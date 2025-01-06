using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutCourseRepository
    {
        WorkoutCourseDTO GetWorkoutCourseById(int workoutId);
        IList<WorkoutCourseDTO> GetAllWorkoutCourses();
        WorkoutCourseDTO AddWorkoutCourse(CreateWorkoutCourseDTO workoutCourse);
    }
}
