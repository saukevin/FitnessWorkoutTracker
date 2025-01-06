import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateWorkoutCourseDTO } from '../models/createWorkoutCourseDTO';

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
    return new CreateWorkoutCourseDTO();
  }
}
