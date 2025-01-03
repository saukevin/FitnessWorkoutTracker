using FitnessWorkoutTracker.Entities.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisePerformancesController : ControllerBase
    {
        private readonly IExercisePerformanceRepository exercisePerformanceRepository;

        public ExercisePerformancesController() { }

        public ExercisePerformancesController(IExercisePerformanceRepository exercisePerformanceRepository) 
        {
            this.exercisePerformanceRepository = exercisePerformanceRepository;
        }
    }
}
