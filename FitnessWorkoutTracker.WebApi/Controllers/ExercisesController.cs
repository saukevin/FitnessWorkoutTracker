using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/{workoutId}/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly IWorkoutRepository workoutRepository;
        private readonly IExerciseRepository exerciseRepository;

        public ExercisesController(IWorkoutRepository workoutRepository,
            IExerciseRepository exerciseRepository)
        {
            this.workoutRepository = workoutRepository;
            this.exerciseRepository = exerciseRepository;
        }

        [HttpGet]
        public ActionResult<IList<ExerciseDTO>> GetAllExercisesByWorkoutId([FromRoute] int workoutId)
        {
            WorkoutDTO workout = workoutRepository.GetWorkoutById(workoutId);

            if (workout == null)
                return NotFound();

            IList<ExerciseDTO> exercises = exerciseRepository.GetAllExercisesByWorkoutId(workoutId);

            return Ok(exercises);
        }
    }
}
