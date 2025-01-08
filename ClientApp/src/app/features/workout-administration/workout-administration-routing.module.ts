import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  COMPLETED_WORKOUT_SESSIONS_ROUTE,
  CREATE_ROUTE,
  CURRENT_WORKOUTS_ROUTE,
  EDIT_ROUTE,
  USER_WORKOUTS_ROUTE,
} from '../../core/constants/routes';
import { AppWorkoutsPageComponent } from './pages/app-workouts-page/app-workouts-page.component';
import { CurrentWorkoutsPageComponent } from './pages/current-workouts-page/current-workouts-page.component';
import { UserWorkoutsPageComponent } from './pages/user-workouts-page/user-workouts-page.component';
import { CreateUserWorkoutPageComponent } from './pages/create-user-workout-page/create-user-workout-page.component';
import { EditUserWorkoutPageComponent } from './pages/edit-user-workout-page/edit-user-workout-page.component';
import { CompletedWorkoutSessionsPageComponent } from './pages/completed-workout-sessions-page/completed-workout-sessions-page.component';
import { CompletedWorkoutSessionDetailsPageComponent } from './pages/completed-workout-session-details-page/completed-workout-session-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppWorkoutsPageComponent,
  },
  {
    path: CURRENT_WORKOUTS_ROUTE,
    component: CurrentWorkoutsPageComponent,
  },
  {
    path: USER_WORKOUTS_ROUTE,
    component: UserWorkoutsPageComponent,
  },
  {
    path: COMPLETED_WORKOUT_SESSIONS_ROUTE,
    component: CompletedWorkoutSessionsPageComponent,
  },
  {
    path: `${COMPLETED_WORKOUT_SESSIONS_ROUTE}/:workoutSessionId`,
    component: CompletedWorkoutSessionDetailsPageComponent,
  },
  {
    path: `${USER_WORKOUTS_ROUTE}/${CREATE_ROUTE}`,
    component: CreateUserWorkoutPageComponent,
  },
  {
    path: `${USER_WORKOUTS_ROUTE}/${EDIT_ROUTE}/:workoutId`,
    component: EditUserWorkoutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutAdministrationRoutingModule {}
