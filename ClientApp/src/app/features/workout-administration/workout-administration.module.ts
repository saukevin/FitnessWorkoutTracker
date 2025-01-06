import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WorkoutAdministrationRoutingModule } from './workout-administration-routing.module';
import { AddEditWorkoutFormComponent } from './components/add-edit-workout-form/add-edit-workout-form.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { AppWorkoutsPageComponent } from './pages/app-workouts-page/app-workouts-page.component';
import { CurrentWorkoutsPageComponent } from './pages/current-workouts-page/current-workouts-page.component';
import { UserWorkoutsPageComponent } from './pages/user-workouts-page/user-workouts-page.component';
import { CreateUserWorkoutPageComponent } from './pages/create-user-workout-page/create-user-workout-page.component';
import { EditUserWorkoutPageComponent } from './pages/edit-user-workout-page/edit-user-workout-page.component';
import { ExerciseFormCardComponent } from './components/exercise-form-card/exercise-form-card.component';

@NgModule({
  declarations: [
    AddEditWorkoutFormComponent,
    WorkoutCardComponent,
    AppWorkoutsPageComponent,
    CurrentWorkoutsPageComponent,
    UserWorkoutsPageComponent,
    CreateUserWorkoutPageComponent,
    EditUserWorkoutPageComponent,
    ExerciseFormCardComponent,
  ],
  imports: [SharedModule, WorkoutAdministrationRoutingModule],
})
export class WorkoutAdministrationModule {}
