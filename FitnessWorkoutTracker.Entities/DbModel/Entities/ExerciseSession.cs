namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class ExerciseSession
    {
        public int ExerciseSessionId { get; set; }
        public Exercise Exercise { get; set; }
        public DateOnly ExecutionDate { get; set; }
        public int ExecutionTime { get; set; }
        public bool IsCompleted { get; set; }
    }
}
