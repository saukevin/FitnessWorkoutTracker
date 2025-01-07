using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class WorkoutCourseDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public WorkoutCourseType WorkoutCourseType { get; set; }
        public List<ExerciseDTO> Exercises { get; set; }

        public WorkoutCourseDTO() { }

        public WorkoutCourseDTO(WorkoutCourse workoutCourse) 
        {
            Id = workoutCourse.WorkoutCourseId;
            Name = workoutCourse.Name;
            Description = workoutCourse.Description;
            WorkoutCourseType = workoutCourse.WorkoutCourseType;

            if(workoutCourse.Exercises != null)
                Exercises = workoutCourse.Exercises
                    .Select((Exercise e) => new ExerciseDTO(e))
                    .ToList();
        }
    }
}
