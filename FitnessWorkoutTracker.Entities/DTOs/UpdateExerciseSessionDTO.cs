using FitnessWorkoutTracker.Entities.DbModel.Entities;
using System.Xml.Linq;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class UpdateExerciseSessionDTO
    {
        public int ExerciseSessionId { get; set; }
        public DateTime ExecutionDate { get; set; }
        public int ExecutionTime { get; set; }

        public ExerciseSession MapToUpdateEntity(ExerciseSession toUpdate)
        {
            toUpdate.ExerciseSessionId = ExerciseSessionId;
            toUpdate.ExecutionDate = DateOnly.FromDateTime(ExecutionDate);
            toUpdate.ExecutionTime = ExecutionTime;
            toUpdate.IsCompleted = true;

            return toUpdate;
        }

    }
}
