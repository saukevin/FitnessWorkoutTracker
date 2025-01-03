﻿namespace FitnessWorkoutTracker.Entities.DbModel.Entities
{
    public class Exercise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Sets { get; set; }
        public int Repetitions { get; set; }
        public int Load { get; set; }
        public WorkoutCourse WorkoutCourse { get; set; }
    }
}
