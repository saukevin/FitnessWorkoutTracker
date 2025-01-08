using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/{workoutId}/WorkoutSessions/{workoutSessionId}/Exercises/{exerciseId}/[controller]")]
    [ApiController]
    public class ExerciseSessionsController : ControllerBase
    {
        private readonly IWorkoutRepository workoutRepository;
        private readonly IWorkoutSessionRepository workoutSessionRepository;
        private readonly IExerciseRepository exerciseRepository;
        private readonly IExerciseSessionRepository exerciseSessionRepository;

        public ExerciseSessionsController(
            IWorkoutRepository workoutRepository,
            IWorkoutSessionRepository workoutSessionRepository,
            IExerciseRepository exerciseRepository,
            IExerciseSessionRepository exerciseSessionRepository) 
        {
            this.workoutRepository = workoutRepository;
            this.workoutSessionRepository = workoutSessionRepository;
            this.exerciseRepository = exerciseRepository;
            this.exerciseSessionRepository = exerciseSessionRepository;

        }

        [HttpPut]
        [Route("{exerciseSessionId}")]
        public ActionResult CompleteExerciseSession([FromRoute] int workoutId,
            [FromRoute] int workoutSessionId,
            [FromRoute] int exerciseId,
            [FromRoute] int exerciseSessionId,
            [FromBody] UpdateExerciseSessionDTO exerciseSession)
        {

            if(exerciseSessionId != exerciseSession.ExerciseSessionId)
                return BadRequest("ExerciseSessionId route doesn't match with the body ExerciseSessionId");

            WorkoutDTO workout = workoutRepository.GetWorkoutById(workoutId);
            ExerciseDTO exercise = exerciseRepository.GetById(exerciseId);
            WorkoutSessionDTO workoutSession = workoutSessionRepository.GetById(workoutSessionId);

            if (workout == null || exercise == null || workoutSession == null)
                return NotFound();

            exerciseSessionRepository.CompleteExerciseSession(workoutSessionId, exerciseSession);

            return Ok();
        }
    }
}
