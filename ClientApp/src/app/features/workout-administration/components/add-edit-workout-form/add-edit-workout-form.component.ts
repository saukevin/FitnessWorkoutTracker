import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { UserWorkoutFormHelper } from '../../helpers/userWorkoutFormHelper';

@Component({
  selector: 'app-add-edit-workout-form',
  standalone: false,
  templateUrl: './add-edit-workout-form.component.html',
  styleUrl: './add-edit-workout-form.component.scss',
})
export class AddEditWorkoutFormComponent {
  @Input() form: FormGroup;

  get exerciseFormGroups(): FormGroup[] {
    const array: FormArray = this.form.get('exercises') as FormArray;
    return array.controls as FormGroup[];
  }

  constructor() {}

  addNewExercise(): void {
    const newExerciseFormGroup: FormGroup =
      UserWorkoutFormHelper.createNewExerciseForm();
    (this.form.get('exercises') as FormArray).push(newExerciseFormGroup);
  }

  deleteExercise(exerciseFormIndex: number): void {
    (this.form.get('exercises') as FormArray).removeAt(exerciseFormIndex);
  }
}
