using FitnessWorkoutTracker.Entities.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly IExerciseRepository exerciseRepository;

        public ExercisesController() { }

        public ExercisesController(IExerciseRepository exerciseRepository)
        {
            this.exerciseRepository = exerciseRepository;
        }
    }
}
