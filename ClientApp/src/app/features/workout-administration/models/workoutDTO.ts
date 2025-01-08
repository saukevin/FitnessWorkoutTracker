import { WorkoutTypeEnum } from '../enum/workoutTypeEnum';
import { ExerciseDTO } from './exerciseDTO';

export class WorkoutDTO {
  id: number;
  name: string;
  description: string;
  workoutType: WorkoutTypeEnum;
  exercises: ExerciseDTO[];
}
