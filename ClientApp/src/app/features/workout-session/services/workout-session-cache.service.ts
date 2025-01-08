import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { WorkoutSessionDTO } from '../models/workoutSessionDTO';
import { ExerciseSessionDTO } from '../models/exerciseSessionDTO';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSessionCacheService {
  currentWorkoutSession$: Observable<WorkoutSessionDTO>;

  private currentWorkoutSession: ReplaySubject<WorkoutSessionDTO> =
    new ReplaySubject();

  constructor() {
    this.setSubjectsAsObservables();
  }

  public setNewWorkoutSession(workoutSession: WorkoutSessionDTO): void {
    this.currentWorkoutSession.next(workoutSession);
  }

  public getExerciseSessionByExerciseId(
    exerciseId: number
  ): Observable<ExerciseSessionDTO> {
    return this.currentWorkoutSession$.pipe(
      map((workoutSession: WorkoutSessionDTO) =>
        this.exercisePerfomanceByExerciseId(workoutSession, exerciseId)
      )
    );
  }

  public completeExerciseSession(exerciseId: number): void {}

  public isWorkoutSessionExerciseCompleted(
    exerciseId: number
  ): Observable<boolean> {
    return this.currentWorkoutSession$.pipe(
      map((workoutSession: WorkoutSessionDTO) => {
        return this.exercisePerfomanceByExerciseId(workoutSession, exerciseId)
          .isCompleted;
      })
    );
  }

  private setSubjectsAsObservables(): void {
    this.currentWorkoutSession$ = this.currentWorkoutSession.asObservable();
  }

  private exercisePerfomanceByExerciseId(
    workoutSession: WorkoutSessionDTO,
    exerciseId: number
  ): ExerciseSessionDTO {
    return workoutSession.exercisesSessions.find(
      (ep: ExerciseSessionDTO) => ep.exercise.exerciseId === exerciseId
    )!;
  }
}
