import { WorkoutCourseTypeEnum } from '../enum/workoutTypeEnum';
import { CreateExerciseDTO } from './createExerciseDTO';

export class CreateWorkoutCourseDTO {
  name: string;
  description: string | null;
  createExercises: CreateExerciseDTO[];
  workoutCourseType: WorkoutCourseTypeEnum;
}
