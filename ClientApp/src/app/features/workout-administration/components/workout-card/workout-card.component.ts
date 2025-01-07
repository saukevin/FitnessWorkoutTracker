import { Component, Input } from '@angular/core';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';
import { WorkoutCourseTypeEnum } from '../../enum/workoutTypeEnum';
import {
  EDIT_ROUTE,
  WORKOUT_SESSION_ROUTE,
} from '../../../../core/constants/routes';

@Component({
  selector: 'app-workout-card',
  standalone: false,
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.scss',
})
export class WorkoutCardComponent {
  @Input() workoutCourse: WorkoutCourseDTO;

  get startWorkoutRoute(): string {
    return `/${WORKOUT_SESSION_ROUTE}/${this.workoutCourse.id}`;
  }

  get editUserWorkoutRoute(): string {
    return `${EDIT_ROUTE}/${this.workoutCourse.id}`;
  }

  WORKOUT_COURSE_TYPE = WorkoutCourseTypeEnum;
}
