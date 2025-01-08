import { Component, inject, OnInit } from '@angular/core';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';
import { Observable } from 'rxjs';
import { WorkoutSessionService } from '../../../workout-session/services/workout-session.service';

@Component({
  selector: 'app-completed-workout-sessions-page',
  standalone: false,

  templateUrl: './completed-workout-sessions-page.component.html',
  styleUrl: './completed-workout-sessions-page.component.scss',
})
export class CompletedWorkoutSessionsPageComponent implements OnInit {
  workoutSessions$: Observable<WorkoutSessionDTO[]>;

  private workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAllCompletedWorkoutSessions();
  }

  private getAllCompletedWorkoutSessions(): void {
    this.workoutSessions$ = this.workoutSessionService.getAllByCompleted(true);
  }
}
