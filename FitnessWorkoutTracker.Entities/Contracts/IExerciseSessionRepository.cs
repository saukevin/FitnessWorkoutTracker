using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IExerciseSessionRepository
    {
        void CompleteExerciseSession(int workoutSessionId, UpdateExerciseSessionDTO exerciseSession);
    }
}
