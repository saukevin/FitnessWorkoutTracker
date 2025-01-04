import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutCourseDTO } from '../models/workoutCourseDTO';
import { BaseHttpService } from '../../../shared/services/baseHttpService';

@Injectable({
  providedIn: 'root',
})
export class WorkoutAdministrationService extends BaseHttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getAllWorkoutCourses(): Observable<WorkoutCourseDTO[]> {
    const url: string = `${this.baseUri}/WorkoutCourses`;
    return this.httpClient.get<WorkoutCourseDTO[]>(url);
  }
}
