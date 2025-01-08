import { Component, inject, OnInit } from '@angular/core';
import { WorkoutSessionCacheService } from '../../services/workout-session-cache.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExerciseSessionDTO } from '../../models/exerciseSessionDTO';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { UpdateExerciseSessionDTO } from '../../models/updateExerciseSessionDTO';
import { ExerciseSessionHelper } from '../../helpers/exerciseSessionHelper';

@Component({
  selector: 'app-exercise-session-page',
  standalone: false,
  templateUrl: './exercise-session-page.component.html',
  styleUrl: './exercise-session-page.component.scss',
})
export class ExerciseSessionPageComponent implements OnInit {
  currentExerciseSession: ExerciseSessionDTO;

  private workoutId: number;
  private workoutSessionId: number;
  private exerciseId: number;

  private route: ActivatedRoute = inject(ActivatedRoute);
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

  startNextExercise(): void {}

  private getExerciseSession(): void {
    this.workoutSessionCacheService
      .getExerciseSessionByExerciseId(this.exerciseId)
      .subscribe({
        next: (exerciseSession: ExerciseSessionDTO) =>
          (this.currentExerciseSession = exerciseSession),
      });
  }
}
