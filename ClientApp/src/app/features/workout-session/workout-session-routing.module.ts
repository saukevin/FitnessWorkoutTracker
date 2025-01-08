import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutSessionPageComponent } from './pages/workout-session-page/workout-session-page.component';
import {
  COMPLETED_WORKOUT_SESSION_ROUTE,
  EXERCISE_ROUTE,
  EXERCISE_SESSION_ROUTE,
} from '../../core/constants/routes';
import { ExerciseSessionPageComponent } from './pages/exercise-session-page/exercise-session-page.component';
import { WorkoutSessionCompletedPageComponent } from './pages/workout-session-completed-page/workout-session-completed-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutSessionPageComponent,
  },
  {
    path: COMPLETED_WORKOUT_SESSION_ROUTE,
    component: WorkoutSessionCompletedPageComponent,
  },
  {
    path: `${EXERCISE_ROUTE}/:exerciseId/${EXERCISE_SESSION_ROUTE}`,
    component: ExerciseSessionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutSessionRoutingModule {}
