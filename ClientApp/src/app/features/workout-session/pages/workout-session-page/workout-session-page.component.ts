import { Component, inject, OnInit } from '@angular/core';
import { WorkoutSessionDTO } from '../../models/workoutSessionDTO';
import { WorkoutSessionCacheService } from '../../services/workout-session-cache.service';
import { ExerciseDTO } from '../../../workout-administration/models/exerciseDTO';
import { ExerciseSessionDTO } from '../../models/exerciseSessionDTO';

@Component({
  selector: 'app-workout-session-page',
  standalone: false,
  templateUrl: './workout-session-page.component.html',
  styleUrl: './workout-session-page.component.scss',
})
export class WorkoutSessionPageComponent implements OnInit {
  workoutName: string;
  exercises: ExerciseDTO[];

  private workoutSessionCacheService: WorkoutSessionCacheService = inject(
    WorkoutSessionCacheService
  );

  constructor() {}

  ngOnInit(): void {
    this.getWorkoutSession();
  }

  private getWorkoutSession(): void {
    this.workoutSessionCacheService.currentWorkoutSession$.subscribe({
      next: (workoutSession: WorkoutSessionDTO) => {
        this.workoutName = workoutSession.workoutName;
        this.exercises = workoutSession.exercisesSessions.flatMap(
          (exerciseSession: ExerciseSessionDTO) => exerciseSession.exercise
        );
      },
    });
  }
}
