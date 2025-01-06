using FitnessWorkoutTracker.Entities.DbModel.Entities;
using LiteDB;

namespace FitnessWorkoutTracker.Entities.DbModel
{
    public class DataSeeder
    {
        private readonly LiteDbContext _dbContext;

        public DataSeeder(LiteDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SeedData() 
        {
            List<Exercise> upperBodyExercises = GetUpperBodyExercises();

            ILiteCollection<Exercise> exercisesCollection = _dbContext.Context.GetCollection<Exercise>(DatabaseStructure.ExercisesCollection);
            if (!exercisesCollection.FindAll().Any())
            {
                Console.WriteLine("Seeding application workout courses exercises");
                exercisesCollection.InsertBulk(upperBodyExercises);
                exercisesCollection.EnsureIndex((Exercise e) => e.Name);
            }

            ILiteCollection<WorkoutCourse> workoutCoursesCollection = _dbContext.Context.GetCollection<WorkoutCourse>(DatabaseStructure.WorkoutCollection);
            if (!workoutCoursesCollection.FindAll().Any())
            {
                Console.WriteLine("Seeding application workout courses");
                List<WorkoutCourse> workoutCourses = new List<WorkoutCourse>()
                {
                    new WorkoutCourse()
                    {
                        Name = "Upper Body Workout",
                        Description = "Test yourself with the most proficient workout for the upper body!",
                        Exercises = upperBodyExercises
                    }
                };
                workoutCoursesCollection.InsertBulk(workoutCourses);
                workoutCoursesCollection.EnsureIndex((WorkoutCourse w) => w.Name);
            }
        }

        private List<Exercise> GetUpperBodyExercises() 
        {
            return new List<Exercise>()
            {
                new Exercise()
                {
                    Name = "Overhead Press",
                    Description = "Hold dumbbells with an overhand grip at shoulder height and raise weights above your head.",
                    Sets = 4,
                    Repetitions = 12,
                    Load = 0.5
                },
                new Exercise()
                {
                    Name = "Push ups",
                    Description = "Get down on all fours with your arms and legs, lower your chest down towards the floor by bending the elbows.",
                    Sets = 3,
                    Repetitions = 10,
                }
            };
        }
    }
}
