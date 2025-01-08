import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutSessionPageComponent } from './pages/workout-session-page/workout-session-page.component';
import {
  EXERCISE_ROUTE,
  EXERCISE_SESSION_ROUTE,
} from '../../core/constants/routes';
import { ExerciseSessionPageComponent } from './pages/exercise-session-page/exercise-session-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutSessionPageComponent,
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
