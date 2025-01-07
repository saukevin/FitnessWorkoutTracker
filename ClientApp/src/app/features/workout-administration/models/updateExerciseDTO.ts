export class UpdateExerciseDTO {
  exerciseId: number | null;
  name: string;
  description: string | null;
  sets: number;
  repetitions: number;
  load: number | null;
}
