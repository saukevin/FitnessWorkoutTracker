import { ExerciseDTO } from './exerciseDTO';

export class WorkoutCourseDTO {
  id: number;
  name: string;
  description: string;
  exercises: ExerciseDTO[];
}
