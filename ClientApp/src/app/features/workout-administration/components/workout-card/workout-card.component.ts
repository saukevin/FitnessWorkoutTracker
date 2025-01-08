import { Component, inject, Input } from '@angular/core';
import { WorkoutDTO } from '../../models/workoutDTO';
import { WorkoutTypeEnum } from '../../enum/workoutTypeEnum';
import {
  EDIT_ROUTE,
  WORKOUT_SESSION_ROUTE,
} from '../../../../core/constants/routes';
import { WorkoutSessionService } from '../../../workout-session/services/workout-session.service';
import { finalize } from 'rxjs';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';
import { Router } from '@angular/router';
import { WorkoutSessionCacheService } from '../../../workout-session/services/workout-session-cache.service';

@Component({
  selector: 'app-workout-card',
  standalone: false,
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.scss',
})
export class WorkoutCardComponent {
  @Input() workout: WorkoutDTO;

  get editUserWorkoutRoute(): string {
    return `${EDIT_ROUTE}/${this.workout.id}`;
  }

  loading: boolean = false;

  WORKOUT_TYPE = WorkoutTypeEnum;

  private router: Router = inject(Router);
  private workoutSessionCacheService: WorkoutSessionCacheService = inject(
    WorkoutSessionCacheService
  );
  private workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );

  constructor() {}

  createWorkoutSessionAndGoToPage(): void {
    this.loading = true;
    this.workoutSessionService
      .createNewWorkoutSession(this.workout.id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (workoutSession: WorkoutSessionDTO) => {
          this.workoutSessionCacheService.setNewWorkoutSession(workoutSession);
          this.router.navigate([
            `/${this.workout.id}/${WORKOUT_SESSION_ROUTE}/${workoutSession.workoutSessionId}`,
          ]);
        },
      });
  }
}
