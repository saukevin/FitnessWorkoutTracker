using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly IWorkoutRepository workoutRepository;

        public WorkoutsController(IWorkoutRepository workoutRepository) 
        {
            this.workoutRepository = workoutRepository;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<IList<WorkoutDTO>> GetById([FromRoute] int id) 
        {
            WorkoutDTO workout = workoutRepository.GetWorkoutByIdWithReferences(id);

            if (workout == null)
                return NotFound();

            return Ok(workout);
        }

        [HttpGet]
        public ActionResult<IList<WorkoutDTO>> GetAllWorkouts() 
        {
            return Ok(workoutRepository.GetAllWorkouts());
        }

        [HttpGet]
        [Route("byType")]
        public ActionResult<IList<WorkoutDTO>> GetAllWorkoutsByType([FromQuery] WorkoutType workoutType)
        {
            return Ok(workoutRepository.GetAllWorkoutsByType(workoutType));
        }

        [HttpPost]
        public ActionResult<WorkoutDTO> CreateWorkout([FromBody] CreateWorkoutDTO workout) 
        {
            WorkoutDTO createdWorkout = workoutRepository.CreateWorkout(workout);

            if (workout.CreateExercises == null ||!workout.CreateExercises.Any())
                return BadRequest("A workout must have at least 1 exercise");

            return Ok(createdWorkout);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<WorkoutDTO> UpdateWorkout([FromRoute] int id, [FromBody] UpdateWorkoutDTO workoutToUpdate) 
        {
            WorkoutDTO workout = workoutRepository.GetWorkoutById(id);

            if (workout == null)
                return NotFound();

            if (id != workoutToUpdate.WorkoutId)
                return BadRequest("Id route and WorkoutId from body don't match");

            if (workoutToUpdate.UpdateExercises == null || !workoutToUpdate.UpdateExercises.Any())
                return BadRequest("A workout must have at least 1 exercise");

            WorkoutDTO createdWorkout = workoutRepository.UpdateWorkout(workoutToUpdate);
            return Ok(createdWorkout);
        }
    }
}
