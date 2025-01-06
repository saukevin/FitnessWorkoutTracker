import { CreateExerciseDTO } from './createExerciseDTO';

export class CreateWorkoutCourseDTO {
  name: string;
  description: string | null;
  createExercises: CreateExerciseDTO[];
}
