import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WORKOUT_ADMINISTRATION_ROUTE } from '../../constants/routes';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  goToWorkoutAdministration(): void {
    this.router.navigate([`${WORKOUT_ADMINISTRATION_ROUTE}`]);
  }
}
