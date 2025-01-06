import { WorkoutCourseDTO } from './workoutCourseDTO';

export class ExerciseDTO {
  id: number;
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  load?: number;
  workoutCourse: WorkoutCourseDTO;
}
