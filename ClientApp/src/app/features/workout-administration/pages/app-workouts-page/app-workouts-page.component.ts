import { Component, inject, OnInit } from '@angular/core';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { Observable } from 'rxjs';
import { WorkoutDTO } from '../../models/workoutDTO';
import { WorkoutTypeEnum } from '../../enum/workoutTypeEnum';

@Component({
  selector: 'app-workouts-page',
  standalone: false,
  templateUrl: './app-workouts-page.component.html',
  styleUrl: './app-workouts-page.component.scss',
})
export class AppWorkoutsPageComponent implements OnInit {
  appWorkouts$: Observable<WorkoutDTO[]>;

  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAppWorkouts();
  }

  private getAppWorkouts(): void {
    this.appWorkouts$ = this.workoutAdministrationService.getAllWorkoutsByType(
      WorkoutTypeEnum.APP_WORKOUT
    );
  }
}
