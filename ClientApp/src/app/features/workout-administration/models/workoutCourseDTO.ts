import { WorkoutCourseTypeEnum } from '../enum/workoutTypeEnum';
import { ExerciseDTO } from './exerciseDTO';

export class WorkoutCourseDTO {
  id: number;
  name: string;
  description: string;
  workoutCourseType: WorkoutCourseTypeEnum;
  exercises: ExerciseDTO[];
}
