import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WORKOUT_ADMINISTRATION_ROUTE,
  WORKOUT_SESSION_ROUTE,
} from './core/constants/routes';
import { workoutSessionResolver } from './features/workout-session/resolvers/workout-session.resolver';

const routes: Routes = [
  {
    path: WORKOUT_ADMINISTRATION_ROUTE,
    loadChildren: () =>
      import(
        './features/workout-administration/workout-administration.module'
      ).then((w) => w.WorkoutAdministrationModule),
  },
  {
    path: `:workoutId/${WORKOUT_SESSION_ROUTE}/:workoutSessionId`,
    loadChildren: () =>
      import('./features/workout-session/workout-session.module').then(
        (w) => w.WorkoutSessionModule
      ),
    resolve: { workoutSession: workoutSessionResolver },
  },
  {
    path: '',
    redirectTo: WORKOUT_ADMINISTRATION_ROUTE,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: WORKOUT_ADMINISTRATION_ROUTE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
