using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class UpdateExerciseDTO
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Sets { get; set; }
        public int Repetitions { get; set; }
        public int? Load { get; set; }

        public UpdateExerciseDTO() { }

        public Exercise MapToEntity()
        {
            return new Exercise()
            {
                Name = Name,
                Description = Description,
                Sets = Sets,
                Repetitions = Repetitions,
                Load = Load
            };
        }
    }
}
