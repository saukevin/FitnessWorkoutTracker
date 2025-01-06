import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateWorkoutCourseDTO } from '../models/createWorkoutCourseDTO';
import { CreateExerciseDTO } from '../models/createExerciseDTO';

export class UserWorkoutFormHelper {
  public static createNewWorkoutCourseForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl(null, Validators.maxLength(150)),
      exercises: new FormArray([this.createNewExerciseForm()]),
    });
  }

  public static createNewExerciseForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      description: new FormControl(null, Validators.maxLength(150)),
      sets: new FormControl(1, [Validators.required, Validators.min(0)]),
      repetitions: new FormControl(1, [Validators.required, Validators.min(0)]),
      load: new FormControl(0, Validators.min(0)),
    });
  }

  public static mapFormToCreateWorkoutCourseDTO(
    form: FormGroup
  ): CreateWorkoutCourseDTO {
    const exercisesForms: FormGroup[] = (form.get('exercises') as FormArray)
      .controls as FormGroup[];

    const exercises: CreateExerciseDTO[] = exercisesForms.map(
      (exerciseForm: FormGroup) => {
        const exercise: CreateExerciseDTO = {
          name: exerciseForm.get('name')!.value,
          description: exerciseForm.get('description')!.value ?? null,
          sets: exerciseForm.get('sets')!.value,
          repetitions: exerciseForm.get('repetitions')!.value,
          load: exerciseForm.get('load')!.value ?? null,
        };
        return exercise;
      }
    );

    return {
      name: form.get('name')!.value,
      description: form.get('description')!.value,
      createExercises: exercises,
    } as CreateWorkoutCourseDTO;
  }
}
