using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IExerciseRepository
    {
        ExerciseDTO GetById(int exerciseId);
        IList<ExerciseDTO> GetAllExercisesByWorkoutId(int workoutId);
    }
}
