using FitnessWorkoutTracker.Entities.Contracts;
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
        public ActionResult<IList<WorkoutCourseDTO>> GetAllWorkoutCourses() 
        {
            return Ok(workoutCourseRepository.GetAllWorkoutCourses());
        }

        [HttpPost]
        public ActionResult<WorkoutCourseDTO> CreateNewWorkoutCourse([FromBody] WorkoutCourseDTO workoutCourse) 
        {
            WorkoutCourseDTO createdCourse = workoutCourseRepository.AddWorkoutCourse(workoutCourse);
            return Ok(createdCourse);
        }
    }
}
