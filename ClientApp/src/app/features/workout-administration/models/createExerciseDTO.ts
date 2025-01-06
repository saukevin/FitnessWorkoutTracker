export class CreateExerciseDTO {
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  load?: number;
}
