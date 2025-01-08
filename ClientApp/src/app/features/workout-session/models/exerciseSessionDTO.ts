import { ExerciseDTO } from '../../workout-administration/models/exerciseDTO';

export class ExerciseSessionDTO {
  exerciseSessionId: number;
  executionDate: Date;
  executionTime: number;
  isCompleted: boolean;
  exercise: ExerciseDTO;
}
