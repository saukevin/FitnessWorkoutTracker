import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../shared/services/baseHttpService';
import { Observable } from 'rxjs';
import { WorkoutSessionDTO } from '../models/workoutSessionDTO';
import { ExerciseDTO } from '../../workout-administration/models/exerciseDTO';
import { UpdateExerciseSessionDTO } from '../models/updateExerciseSessionDTO';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSessionService extends BaseHttpService {
  constructor() {
    super();
  }

  public getWorkoutSessionById(
    workoutId: number,
    wokroutSessionId: number
  ): Observable<WorkoutSessionDTO> {
    const url: string = `${this.baseUri}/${workoutId}/WorkoutSessions/${wokroutSessionId}`;
    return this.httpClient.get<WorkoutSessionDTO>(url);
  }

  public getWorkoutExercises(workoutId: number): Observable<ExerciseDTO[]> {
    const url: string = `${this.baseUri}/Exercises?workoutId=${workoutId}`;
    return this.httpClient.get<ExerciseDTO[]>(url);
  }

  public createNewWorkoutSession(
    workoutId: number
  ): Observable<WorkoutSessionDTO> {
    const url: string = `${this.baseUri}/${workoutId}/WorkoutSessions`;
    return this.httpClient.post<WorkoutSessionDTO>(url, null);
  }

  public completeExerciseSession(
    workoutId: number,
    workoutSessionId: number,
    exerciseId: number,
    exerciseSession: UpdateExerciseSessionDTO
  ): Observable<void> {
    const url: string = `${this.baseUri}/${workoutId}/WorkoutSessions/${workoutSessionId}/Exercises/${exerciseId}/ExerciseSessions/${exerciseSession.exerciseSessionId}`;
    return this.httpClient.put<void>(url, exerciseSession);
  }
}
