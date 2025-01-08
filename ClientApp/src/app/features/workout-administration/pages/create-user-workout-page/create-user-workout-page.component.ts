import { Component, inject, OnInit } from '@angular/core';
import {
  USER_WORKOUTS_ROUTE,
  WORKOUT_ADMINISTRATION_ROUTE,
} from '../../../../core/constants/routes';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { FormGroup } from '@angular/forms';
import { UserWorkoutFormHelper } from '../../helpers/userWorkoutFormHelper';
import { CreateWorkoutDTO } from '../../models/createWorkoutDTO';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { AppSnackBarService } from '../../../../shared/services/app-snack-bar.service';

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

  form: FormGroup;

  loading: boolean = false;

  private router: Router = inject(Router);
  private snackBar: AppSnackBarService = inject(AppSnackBarService);
  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.form = UserWorkoutFormHelper.createNewWorkoutForm();
  }

  createWorkout(): void {
    const newWorkout: CreateWorkoutDTO =
      UserWorkoutFormHelper.mapFormToCreateWorkoutDTO(this.form);
    this.loading = true;
    this.workoutAdministrationService
      .createWorkout(newWorkout)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Corso di allenamento personalizzato creato!');
          this.router.navigate([
            `/${WORKOUT_ADMINISTRATION_ROUTE}/${USER_WORKOUTS_ROUTE}`,
          ]);
        },
      });
  }
}
