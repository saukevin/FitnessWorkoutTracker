using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class WorkoutDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public WorkoutType WorkoutType { get; set; }
        public List<ExerciseDTO> Exercises { get; set; }

        public WorkoutDTO() { }

        public WorkoutDTO(Workout workout) 
        {
            Id = workout.WorkoutId;
            Name = workout.Name;
            Description = workout.Description;
            WorkoutType = workout.WorkoutType;

            if(workout.Exercises != null)
                Exercises = workout.Exercises
                    .Select((Exercise e) => new ExerciseDTO(e))
                    .ToList();
        }
    }
}
