import { Component, inject, OnInit } from '@angular/core';
import { USER_WORKOUTS_ROUTE } from '../../../../core/constants/routes';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { FormArray, FormGroup } from '@angular/forms';
import { UserWorkoutFormHelper } from '../../helpers/userWorkoutFormHelper';
import { CreateWorkoutCourseDTO } from '../../models/createWorkoutCourseDTO';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user-workout-page',
  standalone: false,
  templateUrl: './create-user-workout-page.component.html',
  styleUrl: './create-user-workout-page.component.scss',
})
export class CreateUserWorkoutPageComponent implements OnInit {
  get userWorkoutsRoute(): string {
    return USER_WORKOUTS_ROUTE;
  }

  get isCreateButtonDisabled(): boolean {
    return this.form.invalid || this.loading;
  }

  get exerciseFormGroups(): FormGroup[] {
    const array: FormArray = this.form.get('exercises') as FormArray;
    return array.controls as FormGroup[];
  }

  form: FormGroup;

  loading: boolean = false;

  private router: Router = inject(Router);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.form = UserWorkoutFormHelper.createNewWorkoutCourseForm();
  }

  addNewExercise(): void {
    const newExerciseFormGroup: FormGroup =
      UserWorkoutFormHelper.createNewExerciseForm();
    (this.form.get('exercises') as FormArray).push(newExerciseFormGroup);
  }

  deleteExercise(exerciseFormIndex: number): void {
    (this.form.get('exercises') as FormArray).removeAt(exerciseFormIndex);
  }

  createWorkoutCourse(): void {
    const newWorkoutCourse: CreateWorkoutCourseDTO =
      UserWorkoutFormHelper.mapFormToCreateWorkoutCourseDTO(this.form);
    this.loading = true;
    this.workoutAdministrationService
      .createWorkoutCourse(newWorkoutCourse)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Corso di allenamento personalizzato creato!');
          this.router.navigate([this.userWorkoutsRoute]);
        },
      });
  }
}
