import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HOME_ROUTE,
  WORKOUT_ADMINISTRATION_ROUTE,
  WORKOUT_SESSION_ROUTE,
} from './core/constants/routes';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { workoutSessionResolver } from './features/workout-session/resolvers/workout-session.resolver';

const routes: Routes = [
  {
    path: HOME_ROUTE,
    component: HomePageComponent,
  },
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
    redirectTo: HOME_ROUTE,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: HOME_ROUTE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
