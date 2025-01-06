using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class WorkoutCourseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public WorkoutCourseDTO() { }

        public WorkoutCourseDTO(WorkoutCourse workoutCourse) 
        {
            Id = workoutCourse.Id;
            Name = workoutCourse.Name;
            Description = workoutCourse.Description;
        }

        public WorkoutCourse MapToEntity()
        {
            return new WorkoutCourse
            {
                Id = Id,
                Name = Name,
                Description = Description
            };
        }
    }
}
