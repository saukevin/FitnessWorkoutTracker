import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { finalize, Observable, tap } from 'rxjs';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';
import { FormGroup } from '@angular/forms';
import { UserWorkoutFormHelper } from '../../helpers/userWorkoutFormHelper';
import {
  USER_WORKOUTS_ROUTE,
  WORKOUT_ADMINISTRATION_ROUTE,
} from '../../../../core/constants/routes';
import { UpdateWorkoutCourseDTO } from '../../models/updateWorkoutCourseDTO';
import { AppSnackBarService } from '../../../../shared/services/app-snack-bar.service';

@Component({
  selector: 'app-edit-user-workout-page',
  standalone: false,
  templateUrl: './edit-user-workout-page.component.html',
  styleUrl: './edit-user-workout-page.component.scss',
})
export class EditUserWorkoutPageComponent implements OnInit {
  get userWorkoutsRoute(): string {
    return USER_WORKOUTS_ROUTE;
  }

  get isSaveButtonDisabled(): boolean {
    return this.form.invalid || this.loading;
  }

  workoutCourse$: Observable<WorkoutCourseDTO>;
  form: FormGroup;

  loading: boolean = false;

  private workoutCourseId: number;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private snackBar: AppSnackBarService = inject(AppSnackBarService);
  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.workoutCourseId = Number(
      this.route.snapshot.paramMap.get('workoutId')
    );
    this.getWorkoutCourseAndCreateForm();
  }

  saveWorkoutCourse(): void {
    this.loading = true;
    const workoutToUpdate: UpdateWorkoutCourseDTO =
      UserWorkoutFormHelper.mapFormToEditWorkoutCourseDTO(this.form);
    this.workoutAdministrationService
      .updateWorkoutCourse(workoutToUpdate)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.snackBar.open('Allenamento modificato con successo!');
          this.router.navigate([
            `/${WORKOUT_ADMINISTRATION_ROUTE}/${USER_WORKOUTS_ROUTE}`,
          ]);
        },
      });
  }

  private getWorkoutCourseAndCreateForm(): void {
    this.workoutCourse$ = this.workoutAdministrationService
      .getWorkoutCourseById(this.workoutCourseId)
      .pipe(
        tap(
          (workoutCourse: WorkoutCourseDTO) =>
            (this.form =
              UserWorkoutFormHelper.createEditWorkoutCourseForm(workoutCourse))
        )
      );
  }
}
