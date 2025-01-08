import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutDTO } from '../../models/workoutDTO';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { WorkoutTypeEnum } from '../../enum/workoutTypeEnum';
import { CREATE_ROUTE } from '../../../../core/constants/routes';

@Component({
  selector: 'app-user-workouts-page',
  standalone: false,
  templateUrl: './user-workouts-page.component.html',
  styleUrl: './user-workouts-page.component.scss',
})
export class UserWorkoutsPageComponent implements OnInit {
  get userWorkoutCreateRoute(): string {
    return CREATE_ROUTE;
  }

  userWorkouts$: Observable<WorkoutDTO[]>;

  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAllUserWorkouts();
  }

  private getAllUserWorkouts(): void {
    this.userWorkouts$ = this.workoutAdministrationService.getAllWorkoutsByType(
      WorkoutTypeEnum.USER_WORKOUT
    );
  }
}
