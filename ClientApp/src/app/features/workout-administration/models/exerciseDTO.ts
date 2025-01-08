import { WorkoutDTO } from './workoutDTO';

export class ExerciseDTO {
  exerciseId: number;
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  load?: number;
  workout: WorkoutDTO;
}
