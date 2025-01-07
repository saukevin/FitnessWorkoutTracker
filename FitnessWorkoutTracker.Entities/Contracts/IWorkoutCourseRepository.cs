using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutCourseRepository
    {
        WorkoutCourseDTO GetWorkoutCourseById(int workoutId);
        WorkoutCourseDTO GetWorkoutCourseByIdWithReferences(int workoutId);
        IList<WorkoutCourseDTO> GetAllWorkoutCourses();
        IList<WorkoutCourseDTO> GetAllWorkoutCoursesByType(WorkoutCourseType workoutCourseType);
        WorkoutCourseDTO AddWorkoutCourse(CreateWorkoutCourseDTO workoutCourse);
        WorkoutCourseDTO UpdateWorkoutCourse(UpdateWorkoutCourseDTO workoutCourse);
    }
}
