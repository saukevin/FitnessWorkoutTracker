import { Component, Input } from '@angular/core';
import { WorkoutDTO } from '../../models/workoutDTO';

@Component({
  selector: 'app-workouts-list',
  standalone: false,
  templateUrl: './workouts-list.component.html',
  styleUrl: './workouts-list.component.scss',
})
export class WorkoutsListComponent {
  @Input() workouts: WorkoutDTO[];
}
