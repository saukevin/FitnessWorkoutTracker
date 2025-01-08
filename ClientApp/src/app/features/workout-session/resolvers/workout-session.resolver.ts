import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { WorkoutSessionService } from '../services/workout-session.service';
import { WorkoutSessionDTO } from '../models/workoutSessionDTO';
import { WorkoutSessionCacheService } from '../services/workout-session-cache.service';
import { tap } from 'rxjs';

export const workoutSessionResolver: ResolveFn<WorkoutSessionDTO> = (
  route,
  state
) => {
  const workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );
  const workoutSessionCacheService: WorkoutSessionCacheService = inject(
    WorkoutSessionCacheService
  );
  const workoutSessionId: number = Number(
    route.paramMap.get('workoutSessionId')
  );
  return workoutSessionService
    .getWorkoutSessionById(workoutSessionId)
    .pipe(
      tap((workoutSession: WorkoutSessionDTO) =>
        workoutSessionCacheService.setNewWorkoutSession(workoutSession)
      )
    );
};
