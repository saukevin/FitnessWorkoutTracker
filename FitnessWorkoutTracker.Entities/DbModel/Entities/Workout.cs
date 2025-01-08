namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class Workout
    {
        public int WorkoutId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public WorkoutType WorkoutType { get; set; }
        public List<Exercise> Exercises { get; set; }
        public List<WorkoutSession> WorkoutSessions { get; set; }
    }
}
