namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class WorkoutCourse
    {
        public int WorkoutCourseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Exercise> Exercises { get; set; }
    }
}
