import { Component, inject, Input } from '@angular/core';
import { ExerciseDTO } from '../../../workout-administration/models/exerciseDTO';
import { WorkoutSessionCacheService } from '../../services/workout-session-cache.service';
import {
  EXERCISE_ROUTE,
  EXERCISE_SESSION_ROUTE,
} from '../../../../core/constants/routes';

@Component({
  selector: 'app-exercise-card',
  standalone: false,
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
})
export class ExerciseCardComponent {
  @Input() exercise: ExerciseDTO;

  get exerciseSessionRoute(): string {
    return `${EXERCISE_ROUTE}/${this.exercise.exerciseId}/${EXERCISE_SESSION_ROUTE}`;
  }

  workoutSessionCacheService: WorkoutSessionCacheService = inject(
    WorkoutSessionCacheService
  );

  constructor() {}
}
