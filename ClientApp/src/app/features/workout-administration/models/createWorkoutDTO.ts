import { CreateExerciseDTO } from './createExerciseDTO';

export class CreateWorkoutDTO {
  name: string;
  description: string | null;
  createExercises: CreateExerciseDTO[];
}
