import { UpdateExerciseDTO } from './updateExerciseDTO';

export class UpdateWorkoutDTO {
  workoutId: number;
  name: string;
  description: string | null;
  updateExercises: UpdateExerciseDTO[];
}
