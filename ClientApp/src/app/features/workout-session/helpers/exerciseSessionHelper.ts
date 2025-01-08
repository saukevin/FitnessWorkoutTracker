import { UpdateExerciseSessionDTO } from '../models/updateExerciseSessionDTO';

export class ExerciseSessionHelper {
  public static mapToUpdateExerciseSessionDTO(
    exerciseSessionId: number,
    exerciseExecutionTime: number
  ): UpdateExerciseSessionDTO {
    return {
      exerciseSessionId,
      executionDate: new Date(),
      executionTime: exerciseExecutionTime,
    } as UpdateExerciseSessionDTO;
  }
}
