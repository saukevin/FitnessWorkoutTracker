using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IExerciseRepository
    {
        IList<ExerciseDTO> GetAllExercisesByWorkoutId(int workoutId);
    }
}
