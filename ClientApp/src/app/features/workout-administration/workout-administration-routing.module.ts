import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutAdministrationHomePageComponent } from './pages/workout-administration-home-page/workout-administration-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutAdministrationHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutAdministrationRoutingModule {}
