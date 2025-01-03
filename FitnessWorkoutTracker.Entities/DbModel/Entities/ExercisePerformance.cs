namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class ExercisePerformance
    {
        public int Id { get; set; }
        public DateOnly ExecutionDate { get; set; }
        public int ExecutionTime { get; set; }
        public Exercise Exercise { get; set; }
    }
}
