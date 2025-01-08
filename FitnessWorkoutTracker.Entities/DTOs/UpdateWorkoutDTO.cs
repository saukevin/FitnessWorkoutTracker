using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class UpdateWorkoutDTO
    {
        public int WorkoutId { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<UpdateExerciseDTO> UpdateExercises { get; set; }

        public UpdateWorkoutDTO() { }

        public Workout MapToUpdateEntity(Workout toUpdate)
        {
            List<Exercise> exercises = UpdateExercises
                .Select((UpdateExerciseDTO e) => e.MapToEntity())
                .ToList();

            toUpdate.Name = Name;
            toUpdate.Description = Description;
            toUpdate.Exercises = exercises;

            return toUpdate;
        }
    }
}
