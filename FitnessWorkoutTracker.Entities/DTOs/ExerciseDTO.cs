using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class ExerciseDTO
    {
        public int ExerciseId { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Sets { get; set; }
        public int Repetitions { get; set; }
        public double? Load { get; set; }

        public ExerciseDTO() { }    

        public ExerciseDTO(Exercise exercise) 
        {
            ExerciseId = exercise.ExerciseId;
            Name = exercise.Name;
            Description = exercise.Description;
            Sets = exercise.Sets;
            Repetitions = exercise.Repetitions;
            Load = exercise.Load;
        }
    }
}
