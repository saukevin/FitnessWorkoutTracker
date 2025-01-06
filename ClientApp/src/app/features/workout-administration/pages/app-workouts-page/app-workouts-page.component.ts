import { Component, inject, OnInit } from '@angular/core';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { Observable } from 'rxjs';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';
import { WorkoutCourseTypeEnum } from '../../enum/workoutTypeEnum';

@Component({
  selector: 'app-workouts-page',
  standalone: false,
  templateUrl: './app-workouts-page.component.html',
  styleUrl: './app-workouts-page.component.scss',
})
export class AppWorkoutsPageComponent implements OnInit {
  appWorkoutCourses$: Observable<WorkoutCourseDTO[]>;

  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAppWorkouts();
  }

  private getAppWorkouts(): void {
    this.appWorkoutCourses$ =
      this.workoutAdministrationService.getAllWorkoutCoursesByType(
        WorkoutCourseTypeEnum.APP_WORKOUT
      );
  }
}
