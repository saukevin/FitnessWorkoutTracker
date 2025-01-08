using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class ExerciseSessionDTO
    {
        public int ExerciseSessionId { get; set; }
        public DateOnly ExecutionDate { get; set; }
        public int ExecutionTime { get; set; }
        public bool IsCompleted { get; set; }
        public ExerciseDTO Exercise { get; set; }

        public ExerciseSessionDTO() { }

        public ExerciseSessionDTO(ExerciseSession exerciseSession) 
        {
            ExerciseSessionId = exerciseSession.ExerciseSessionId;
            ExecutionDate = exerciseSession.ExecutionDate;
            ExecutionTime = exerciseSession.ExecutionTime;
            IsCompleted = exerciseSession.IsCompleted;
            Exercise = new ExerciseDTO(exerciseSession.Exercise);
        }
    }
}
