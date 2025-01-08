import { Component } from '@angular/core';
import {
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

  get userWokroutsRoute(): string {
    return `${WORKOUT_ADMINISTRATION_ROUTE}/${USER_WORKOUTS_ROUTE}`;
  }

  constructor() {}
}
