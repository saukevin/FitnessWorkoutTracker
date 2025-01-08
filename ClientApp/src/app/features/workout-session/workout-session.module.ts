import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WorkoutSessionRoutingModule } from './workout-session-routing.module';
import { WorkoutSessionPageComponent } from './pages/workout-session-page/workout-session-page.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { ExerciseSessionPageComponent } from './pages/exercise-session-page/exercise-session-page.component';
import { ExerciseSessionActionsComponent } from './components/exercise-session-actions/exercise-session-actions.component';
import { WorkoutSessionCompletedPageComponent } from './pages/workout-session-completed-page/workout-session-completed-page.component';

@NgModule({
  declarations: [
    WorkoutSessionPageComponent,
    ExerciseListComponent,
    ExerciseCardComponent,
    ExerciseSessionPageComponent,
    ExerciseSessionActionsComponent,
    WorkoutSessionCompletedPageComponent,
  ],
  imports: [SharedModule, WorkoutSessionRoutingModule],
})
export class WorkoutSessionModule {}
