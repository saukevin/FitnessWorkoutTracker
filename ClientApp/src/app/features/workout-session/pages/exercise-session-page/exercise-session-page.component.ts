import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { WorkoutSessionCacheService } from '../../services/workout-session-cache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ExerciseSessionDTO } from '../../models/exerciseSessionDTO';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { UpdateExerciseSessionDTO } from '../../models/updateExerciseSessionDTO';
import { ExerciseSessionHelper } from '../../helpers/exerciseSessionHelper';
import {
  COMPLETED_WORKOUT_SESSION_ROUTE,
  WORKOUT_SESSION_ROUTE,
} from '../../../../core/constants/routes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-exercise-session-page',
  standalone: false,
  templateUrl: './exercise-session-page.component.html',
  styleUrl: './exercise-session-page.component.scss',
})
export class ExerciseSessionPageComponent implements OnInit {
  currentExerciseSession: ExerciseSessionDTO;

  timerResetSubject: Subject<void> = new Subject<void>();

  private workoutId: number;
  private workoutSessionId: number;
  private exerciseId: number;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private workoutSessionCacheService: WorkoutSessionCacheService = inject(
    WorkoutSessionCacheService
  );
  private workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );

  constructor() {}

  ngOnInit(): void {
    this.workoutId = Number(this.route.snapshot.paramMap.get('workoutId'));
    this.workoutSessionId = Number(
      this.route.snapshot.paramMap.get('workoutSessionId')
    );
    this.exerciseId = Number(this.route.snapshot.paramMap.get('exerciseId'));
    this.getExerciseSession();
  }

  completeCurrentExercise(totalSeconds: number): void {
    const updateExerciseSession: UpdateExerciseSessionDTO =
      ExerciseSessionHelper.mapToUpdateExerciseSessionDTO(
        this.currentExerciseSession.exerciseSessionId,
        totalSeconds
      );
    this.workoutSessionService
      .completeExerciseSession(
        this.workoutId,
        this.workoutSessionId,
        this.exerciseId,
        updateExerciseSession
      )
      .subscribe();
  }

  startNextExercise(): void {
    this.workoutSessionCacheService
      .completeCurrentExerciseSessionAndGetNext(
        this.currentExerciseSession.exerciseSessionId
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (exerciseSession: ExerciseSessionDTO | undefined) => {
          if (exerciseSession === undefined)
            this.router.navigate([
              `/${this.workoutId}/${WORKOUT_SESSION_ROUTE}/${this.workoutSessionId}/${COMPLETED_WORKOUT_SESSION_ROUTE}`,
            ]);
          else {
            this.timerResetSubject.next();
            this.currentExerciseSession = exerciseSession;
          }
        },
      });
  }

  private getExerciseSession(): void {
    this.workoutSessionCacheService
      .getExerciseSessionByExerciseId(this.exerciseId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (exerciseSession: ExerciseSessionDTO) =>
          (this.currentExerciseSession = exerciseSession),
      });
  }
}
