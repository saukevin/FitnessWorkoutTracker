using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class CreateWorkoutCourseDTO
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public WorkoutCourseType WorkoutCourseType { get; set; }
        public List<CreateExerciseDTO> CreateExercises { get; set; }

        public CreateWorkoutCourseDTO() { }

        public WorkoutCourse MapToEntity()
        {
            List<Exercise> exercises = CreateExercises != null
                ? CreateExercises
                    .Select((CreateExerciseDTO e) => e.MapToEntity())
                    .ToList()
                : new List<Exercise>();

            return new WorkoutCourse
            {
                Name = Name,
                Description = Description,
                Exercises = exercises,
                WorkoutCourseType = WorkoutCourseType
            };
        }
    }
}
