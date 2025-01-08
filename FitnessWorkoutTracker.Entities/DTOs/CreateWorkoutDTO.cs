using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class CreateWorkoutDTO
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<CreateExerciseDTO> CreateExercises { get; set; }

        public CreateWorkoutDTO() { }

        public Workout MapToEntity()
        {
            List<Exercise> exercises = CreateExercises
                .Select((CreateExerciseDTO e) => e.MapToEntity())
                .ToList();

            return new Workout
            {
                Name = Name,
                Description = Description,
                Exercises = exercises,
                WorkoutType = WorkoutType.USER_WORKOUT
            };
        }
    }
}
