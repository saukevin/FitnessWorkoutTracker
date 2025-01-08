using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutSessionRepository
    {
        WorkoutSessionDTO GetById(int workoutSessionId);
        WorkoutSessionDTO CreateWorkoutSession(int workoutId);
        List<WorkoutSessionDTO> GetAllByCompleted(bool completed);
        void DeleteById(int workoutSessionId);
    }
}
