using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutSessionRepository
    {
        WorkoutSessionDTO GetById(int workoutSessionId);
        WorkoutSessionDTO CreateWorkoutSession(int workoutId);
    }
}
