using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutSessionsController : ControllerBase
    {
        private readonly IWorkoutSessionRepository workoutSessionRepository;
        private readonly IWorkoutRepository workoutRepository;

        public WorkoutSessionsController(IWorkoutRepository workoutRepository,
            IWorkoutSessionRepository workoutSessionRepository) 
        {
            this.workoutRepository = workoutRepository;
            this.workoutSessionRepository = workoutSessionRepository;
        }

        [HttpGet]
        [Route("{workoutSessionId}")]
        public ActionResult<WorkoutSessionDTO> GetbyId([FromRoute] int workoutSessionId) 
        {
            WorkoutSessionDTO workoutSession = workoutSessionRepository.GetById(workoutSessionId);

            if(workoutSession == null)
                return NotFound();

            return Ok(workoutSession);
        }

        [HttpGet]
        [Route("byCompleted")]
        public ActionResult<WorkoutSessionDTO> GetAllByCompleted([FromQuery] bool completed) 
        {
            List<WorkoutSessionDTO> workoutSessions = workoutSessionRepository.GetAllByCompleted(completed);

            return Ok(workoutSessions);
        }

        [HttpPost]
        public ActionResult<WorkoutSessionDTO> CreateWorkoutSession([FromQuery] int workoutId) 
        {
            WorkoutDTO workout = workoutRepository.GetWorkoutById(workoutId);

            if (workout == null)
                return NotFound();

            WorkoutSessionDTO mewWorkoutSession = workoutSessionRepository.CreateWorkoutSession(workoutId);

            return Ok(mewWorkoutSession);
        }

        [HttpDelete]
        [Route("{workoutSessionId}")]
        public ActionResult DeleteById([FromRoute] int workoutSessionId) 
        {
            WorkoutSessionDTO workoutSession = workoutSessionRepository.GetById(workoutSessionId);

            if (workoutSession == null)
                return NotFound();

            workoutSessionRepository.DeleteById(workoutSessionId);

            return Ok();
        }
    }
}
