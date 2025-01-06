namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class ExercisePerformance
    {
        public int ExercisePerformanceId { get; set; }
        public DateOnly ExecutionDate { get; set; }
        public int ExecutionTime { get; set; }
    }
}
