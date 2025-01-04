import { Component, inject, OnInit } from '@angular/core';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';
import { Observable } from 'rxjs';
import { WorkoutCourseDTO } from '../../models/workoutCourseDTO';

@Component({
  selector: 'app-workout-administration-home-page',
  standalone: false,
  templateUrl: './workout-administration-home-page.component.html',
  styleUrl: './workout-administration-home-page.component.scss',
})
export class WorkoutAdministrationHomePageComponent implements OnInit {
  workoutCourses$: Observable<WorkoutCourseDTO[]>;

  private workoutAdministrationService: WorkoutAdministrationService = inject(
    WorkoutAdministrationService
  );

  constructor() {}

  ngOnInit(): void {
    this.getAllWorkoutCourses();
  }

  private getAllWorkoutCourses(): void {
    this.workoutCourses$ =
      this.workoutAdministrationService.getAllWorkoutCourses();
  }
}
