import { ExerciseSessionDTO } from './exerciseSessionDTO';

export class WorkoutSessionDTO {
  workoutSessionId: number;
  workoutName: string;
  startDate: Date;
  endDate: Date;
  isCompleted: boolean;
  exercisesSessions: ExerciseSessionDTO[];
}
