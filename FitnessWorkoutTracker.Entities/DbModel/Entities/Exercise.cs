namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class Exercise
    {
        public int ExerciseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Sets { get; set; }
        public int Repetitions { get; set; }
        public double? Load { get; set; }
        public List<ExercisePerformance> ExercisePerformances { get; set; }
    }
}
