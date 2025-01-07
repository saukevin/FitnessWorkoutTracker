using FitnessWorkoutTracker.Entities.Contracts;
using FitnessWorkoutTracker.Entities.DbModel.Entities;
using FitnessWorkoutTracker.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutCoursesController : ControllerBase
    {
        private readonly IWorkoutCourseRepository workoutCourseRepository;

        public WorkoutCoursesController(IWorkoutCourseRepository workoutCourseRepository) 
        {
            this.workoutCourseRepository = workoutCourseRepository;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<IList<WorkoutCourseDTO>> GetById([FromRoute] int id) 
        {
            WorkoutCourseDTO workoutCourse = workoutCourseRepository.GetWorkoutCourseByIdWithReferences(id);

            if (workoutCourse == null)
                return NotFound();

            return Ok(workoutCourse);
        }

        [HttpGet]
        public ActionResult<IList<WorkoutCourseDTO>> GetAllWorkoutCourses() 
        {
            return Ok(workoutCourseRepository.GetAllWorkoutCourses());
        }

        [HttpGet]
        [Route("byType")]
        public ActionResult<IList<WorkoutCourseDTO>> GetAllWorkoutCoursesByType([FromQuery] WorkoutCourseType workoutCourseType)
        {
            return Ok(workoutCourseRepository.GetAllWorkoutCoursesByType(workoutCourseType));
        }

        [HttpPost]
        public ActionResult<WorkoutCourseDTO> CreateNewWorkoutCourse([FromBody] CreateWorkoutCourseDTO workoutCourse) 
        {
            WorkoutCourseDTO createdCourse = workoutCourseRepository.AddWorkoutCourse(workoutCourse);
            return Ok(createdCourse);
        }
    }
}
