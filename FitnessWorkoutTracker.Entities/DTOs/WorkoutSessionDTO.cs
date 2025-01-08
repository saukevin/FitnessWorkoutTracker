using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class WorkoutSessionDTO
    {
        public int WorkoutSessionId { get; set; }
        public string WorkoutName { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly? EndDate { get; set; }
        public bool IsCompleted { get; set; }
        public List<ExerciseSessionDTO> ExercisesSessions { get; set; }

        public WorkoutSessionDTO() { }

        public WorkoutSessionDTO(WorkoutSession workoutSession) 
        {
            WorkoutSessionId = workoutSession.WorkoutSessionId;
            WorkoutName = workoutSession.WorkoutName;
            StartDate = workoutSession.StartDate;
            EndDate = workoutSession.EndDate;
            IsCompleted = workoutSession.IsCompleted;
            ExercisesSessions = workoutSession.ExerciseSessions
                .Select((ExerciseSession ep) => new ExerciseSessionDTO(ep))
                .ToList();
        }
    }
}
