using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class CreateWorkoutCourseDTO
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<CreateExerciseDTO> CreateExercises { get; set; }

        public CreateWorkoutCourseDTO() { }

        public WorkoutCourse MapToEntity()
        {
            List<Exercise> exercises = CreateExercises
                .Select((CreateExerciseDTO e) => e.MapToEntity())
                .ToList();

            return new WorkoutCourse
            {
                Name = Name,
                Description = Description,
                Exercises = exercises,
                WorkoutCourseType = WorkoutCourseType.USER_WORKOUT
            };
        }
    }
}
