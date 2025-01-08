import { Component, inject, OnInit } from '@angular/core';
import { WorkoutSessionService } from '../../../workout-session/services/workout-session.service';
import { Observable } from 'rxjs';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';

@Component({
  selector: 'app-current-workouts-page',
  standalone: false,
  templateUrl: './current-workouts-page.component.html',
  styleUrl: './current-workouts-page.component.scss',
})
export class CurrentWorkoutsPageComponent implements OnInit {
  workoutSessions$: Observable<WorkoutSessionDTO[]>;

  private workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAllIncompletedWorkoutSessions();
  }

  deleteWorkoutSession(workoutSessionId: number): void {
    this.workoutSessionService
      .deleteWorkoutSessionById(workoutSessionId)
      .subscribe({
        next: () => this.getAllIncompletedWorkoutSessions(),
      });
  }

  private getAllIncompletedWorkoutSessions(): void {
    this.workoutSessions$ = this.workoutSessionService.getAllByCompleted(false);
  }
}
