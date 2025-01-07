import { Component, Input } from '@angular/core';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';

@Component({
  selector: 'app-workout-courses-list',
  standalone: false,
  templateUrl: './workout-courses-list.component.html',
  styleUrl: './workout-courses-list.component.scss',
})
export class WorkoutCoursesListComponent {
  @Input() workoutCourses: WorkoutCourseDTO[];
}
