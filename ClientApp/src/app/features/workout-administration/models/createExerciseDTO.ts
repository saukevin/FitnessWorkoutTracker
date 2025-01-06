export class CreateExerciseDTO {
  name: string;
  description: string | null;
  sets: number;
  repetitions: number;
  load: number | null;
}
