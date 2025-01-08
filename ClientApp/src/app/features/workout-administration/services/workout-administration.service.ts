import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { WorkoutDTO } from '../models/workoutDTO';
import { BaseHttpService } from '../../../shared/services/baseHttpService';
import { WorkoutTypeEnum } from '../enum/workoutTypeEnum';
import { CreateWorkoutDTO } from '../models/createWorkoutDTO';
import { AppSnackBarService } from '../../../shared/services/app-snack-bar.service';
import { UpdateWorkoutDTO } from '../models/updateWorkoutDTO';

@Injectable({
  providedIn: 'root',
})
export class WorkoutAdministrationService extends BaseHttpService {
  private snackBarService: AppSnackBarService = inject(AppSnackBarService);

  constructor() {
    super();
  }

  public getWorkoutById(workoutId: number): Observable<WorkoutDTO> {
    const url: string = `${this.baseUri}/Workouts/${workoutId}`;
    return this.httpClient.get<WorkoutDTO>(url);
  }

  public getAllWorkouts(): Observable<WorkoutDTO[]> {
    const url: string = `${this.baseUri}/Workouts`;
    return this.httpClient.get<WorkoutDTO[]>(url);
  }

  public getAllWorkoutsByType(
    workoutType: WorkoutTypeEnum
  ): Observable<WorkoutDTO[]> {
    const url: string = `${this.baseUri}/Workouts/byType?workoutType=${workoutType}`;
    return this.httpClient.get<WorkoutDTO[]>(url);
  }

  public createWorkout(newWorkout: CreateWorkoutDTO): Observable<WorkoutDTO> {
    const url: string = `${this.baseUri}/Workouts`;
    return this.httpClient.post<WorkoutDTO>(url, newWorkout).pipe(
      catchError((err: HttpErrorResponse) => {
        this.snackBarService.open(
          "C'è stato un'errore nella creazione del corso personalizzato."
        );
        return throwError(() => new Error());
      })
    );
  }

  updateWorkout(workoutToUpdate: UpdateWorkoutDTO): Observable<WorkoutDTO> {
    const url: string = `${this.baseUri}/Workouts/${workoutToUpdate.workoutId}`;
    return this.httpClient.put<WorkoutDTO>(url, workoutToUpdate).pipe(
      catchError((err: HttpErrorResponse) => {
        this.snackBarService.open(
          "C'è stato un'errore nell'aggiornamento del corso personalizzato."
        );
        return throwError(() => new Error());
      })
    );
  }
}
