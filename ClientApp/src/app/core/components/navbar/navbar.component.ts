import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  APP_WORKOUTS_ROUTE,
  CURRENT_WORKOUTS_ROUTE,
  HOME_ROUTE,
  USER_WORKOUTS_ROUTE,
  WORKOUT_ADMINISTRATION_ROUTE,
} from '../../constants/routes';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private router: Router = inject(Router);

  constructor() {}

  goToHome(): void {
    this.router.navigate([HOME_ROUTE]);
  }

  goToWorkoutAdministration(): void {
    this.router.navigate([`${WORKOUT_ADMINISTRATION_ROUTE}`]);
  }

  goToAppWorkouts(): void {
    this.router.navigate([
      `${WORKOUT_ADMINISTRATION_ROUTE}/${APP_WORKOUTS_ROUTE}`,
    ]);
  }

  goToCurrentWorkouts(): void {
    this.router.navigate([
      `${WORKOUT_ADMINISTRATION_ROUTE}/${CURRENT_WORKOUTS_ROUTE}`,
    ]);
  }

  goToAddEditWorkouts(): void {
    this.router.navigate([
      `${WORKOUT_ADMINISTRATION_ROUTE}/${USER_WORKOUTS_ROUTE}`,
    ]);
  }
}
