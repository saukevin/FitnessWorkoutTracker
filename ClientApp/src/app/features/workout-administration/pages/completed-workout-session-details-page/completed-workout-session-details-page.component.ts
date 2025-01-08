import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutSessionService } from '../../../workout-session/services/workout-session.service';
import { ExerciseSessionDTO } from '../../../workout-session/models/exerciseSessionDTO';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';

@Component({
  selector: 'app-completed-workout-session-details-page',
  standalone: false,
  templateUrl: './completed-workout-session-details-page.component.html',
  styleUrl: './completed-workout-session-details-page.component.scss',
})
export class CompletedWorkoutSessionDetailsPageComponent implements OnInit {
  workoutName: string;
  exerciseSessions: ExerciseSessionDTO[];

  private workoutSessionId: number;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private workoutSessionService: WorkoutSessionService = inject(
    WorkoutSessionService
  );

  constructor() {}

  ngOnInit(): void {
    this.workoutSessionId = Number(
      this.route.snapshot.paramMap.get('workoutSessionId')
    );
    this.getWorkoutSession();
  }

  private getWorkoutSession(): void {
    this.workoutSessionService
      .getWorkoutSessionById(this.workoutSessionId)
      .subscribe({
        next: (workoutSession: WorkoutSessionDTO) => {
          this.workoutName = workoutSession.workoutName;
          this.exerciseSessions = workoutSession.exercisesSessions;
        },
      });
  }
}
