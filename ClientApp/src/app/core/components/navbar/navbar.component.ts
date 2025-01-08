import { Component } from '@angular/core';
import {
  COMPLETED_WORKOUT_SESSIONS_ROUTE,
  CURRENT_WORKOUTS_ROUTE,
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
  get appWorkoutsRoute(): string {
    return WORKOUT_ADMINISTRATION_ROUTE;
  }

  get currentWorkoutsRoute(): string {
    return `${WORKOUT_ADMINISTRATION_ROUTE}/${CURRENT_WORKOUTS_ROUTE}`;
  }

  get userWorkoutsRoute(): string {
    return `${WORKOUT_ADMINISTRATION_ROUTE}/${USER_WORKOUTS_ROUTE}`;
  }

  get completedWorkoutsRoute(): string {
    return `${WORKOUT_ADMINISTRATION_ROUTE}/${COMPLETED_WORKOUT_SESSIONS_ROUTE}`;
  }

  constructor() {}
}
