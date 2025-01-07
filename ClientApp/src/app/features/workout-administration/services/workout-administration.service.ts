import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { WorkoutCourseDTO } from '../models/workoutCourseDTO';
import { BaseHttpService } from '../../../shared/services/baseHttpService';
import { WorkoutCourseTypeEnum } from '../enum/workoutTypeEnum';
import { CreateWorkoutCourseDTO } from '../models/createWorkoutCourseDTO';
import { AppSnackBarService } from '../../../shared/services/app-snack-bar.service';
import { UpdateWorkoutCourseDTO } from '../models/updateWorkoutCourseDTO';

@Injectable({
  providedIn: 'root',
})
export class WorkoutAdministrationService extends BaseHttpService {
  private snackBarService: AppSnackBarService = inject(AppSnackBarService);

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getWorkoutCourseById(
    workoutCourseId: number
  ): Observable<WorkoutCourseDTO> {
    const url: string = `${this.baseUri}/WorkoutCourses/${workoutCourseId}`;
    return this.httpClient.get<WorkoutCourseDTO>(url);
  }

  public getAllWorkoutCourses(): Observable<WorkoutCourseDTO[]> {
    const url: string = `${this.baseUri}/WorkoutCourses`;
    return this.httpClient.get<WorkoutCourseDTO[]>(url);
  }

  public getAllWorkoutCoursesByType(
    workoutType: WorkoutCourseTypeEnum
  ): Observable<WorkoutCourseDTO[]> {
    const url: string = `${this.baseUri}/WorkoutCourses/byType?workoutCourseType=${workoutType}`;
    return this.httpClient.get<WorkoutCourseDTO[]>(url);
  }

  public createWorkoutCourse(
    newWorkoutCourse: CreateWorkoutCourseDTO
  ): Observable<WorkoutCourseDTO> {
    const url: string = `${this.baseUri}/WorkoutCourses`;
    return this.httpClient.post<WorkoutCourseDTO>(url, newWorkoutCourse).pipe(
      catchError((err: HttpErrorResponse) => {
        this.snackBarService.open(
          "C'è stato un'errore nella creazione del corso personalizzato."
        );
        return throwError(() => new Error());
      })
    );
  }

  updateWorkoutCourse(
    workoutCourseToUpdate: UpdateWorkoutCourseDTO
  ): Observable<WorkoutCourseDTO> {
    const url: string = `${this.baseUri}/WorkoutCourses/${workoutCourseToUpdate.workoutCourseId}`;
    return this.httpClient
      .put<WorkoutCourseDTO>(url, workoutCourseToUpdate)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.snackBarService.open(
            "C'è stato un'errore nell'aggiornamento del corso personalizzato."
          );
          return throwError(() => new Error());
        })
      );
  }
}
