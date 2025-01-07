using FitnessWorkoutTracker.Entities.DbModel.Entities;

namespace FitnessWorkoutTracker.Entities.DTOs
{
    public class UpdateWorkoutCourseDTO
    {
        public int WorkoutCourseId { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<UpdateExerciseDTO> UpdateExercises { get; set; }

        public UpdateWorkoutCourseDTO() { }

        public WorkoutCourse MapToUpdateEntity(WorkoutCourse toUpdate)
        {
            List<Exercise> exercises = UpdateExercises
                .Select((UpdateExerciseDTO e) => e.MapToEntity())
                .ToList();

            toUpdate.Name = Name;
            toUpdate.Description = Description;
            toUpdate.Exercises = exercises;

            return toUpdate;
        }
    }
}
