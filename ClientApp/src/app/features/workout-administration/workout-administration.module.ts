import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WorkoutAdministrationHomePageComponent } from './pages/workout-administration-home-page/workout-administration-home-page.component';
import { WorkoutAdministrationRoutingModule } from './workout-administration-routing.module';

@NgModule({
  declarations: [WorkoutAdministrationHomePageComponent],
  imports: [SharedModule, WorkoutAdministrationRoutingModule],
})
export class WorkoutAdministrationModule {}
