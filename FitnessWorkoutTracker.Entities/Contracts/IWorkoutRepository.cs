using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;

namespace FitnessWorkoutTracker.Entities.Contracts
{
    public interface IWorkoutRepository
    {
        WorkoutDTO GetWorkoutById(int workoutId);
        WorkoutDTO GetWorkoutByIdWithReferences(int workoutId);
        IList<WorkoutDTO> GetAllWorkouts();
        IList<WorkoutDTO> GetAllWorkoutsByType(WorkoutType workoutType);
        WorkoutDTO CreateWorkout(CreateWorkoutDTO workout);
        WorkoutDTO UpdateWorkout(UpdateWorkoutDTO workout);
    }
}
