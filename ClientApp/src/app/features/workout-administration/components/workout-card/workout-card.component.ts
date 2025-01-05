import { Component, Input } from '@angular/core';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';

@Component({
  selector: 'app-workout-card',
  standalone: false,
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.scss',
})
export class WorkoutCardComponent {
  @Input() course: WorkoutCourseDTO;
}
