using FitnessWorkoutTracker.Entities.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace FitnessWorkoutTracker.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutCoursesController : ControllerBase
    {
        private readonly IWorkoutCourseRepository workoutCourseRepository;

        public WorkoutCoursesController() { }

        public WorkoutCoursesController(IWorkoutCourseRepository workoutCourseRepository) 
        {
            this.workoutCourseRepository = workoutCourseRepository;
        }
    }
}
