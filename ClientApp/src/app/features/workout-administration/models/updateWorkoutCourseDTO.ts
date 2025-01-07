import { UpdateExerciseDTO } from './updateExerciseDTO';

export class UpdateWorkoutCourseDTO {
  workoutCourseId: number;
  name: string;
  description: string | null;
  updateExercises: UpdateExerciseDTO[];
}
