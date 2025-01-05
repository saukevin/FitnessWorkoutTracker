import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  APP_WORKOUTS_ROUTE,
  CURRENT_WORKOUTS_ROUTE,
  USER_WORKOUTS_ROUTE,
} from '../../core/constants/routes';
import { AppWorkoutsPageComponent } from './pages/app-workouts-page/app-workouts-page.component';
import { CurrentWorkoutsPageComponent } from './pages/current-workouts-page/current-workouts-page.component';
import { UserWorkoutsPageComponent } from './pages/user-workouts-page/user-workouts-page.component';

const routes: Routes = [
  {
    path: APP_WORKOUTS_ROUTE,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutAdministrationRoutingModule {}
