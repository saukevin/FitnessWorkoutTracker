namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class WorkoutSession
    {
        public int WorkoutSessionId { get; set; }
        public string WorkoutName { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly? EndDate { get; set; }
        public bool IsCompleted { get; set; }
        public List<ExerciseSession> ExerciseSessions { get; set; }
    }
}
