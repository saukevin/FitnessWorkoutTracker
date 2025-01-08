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
import { WorkoutsListComponent } from './components/workouts-list/workouts-list.component';
import { WorkoutSessionCardComponent } from './components/workout-session-card/workout-session-card.component';
import { CompletedWorkoutSessionsPageComponent } from './pages/completed-workout-sessions-page/completed-workout-sessions-page.component';
import { CompletedWorkoutSessionDetailsPageComponent } from './pages/completed-workout-session-details-page/completed-workout-session-details-page.component';
import { CompletedExerciseSessionCardComponent } from './components/completed-exercise-session-card/completed-exercise-session-card.component';

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
    WorkoutsListComponent,
    WorkoutSessionCardComponent,
    CompletedWorkoutSessionsPageComponent,
    CompletedWorkoutSessionDetailsPageComponent,
    CompletedExerciseSessionCardComponent,
  ],
  imports: [SharedModule, WorkoutAdministrationRoutingModule],
})
export class WorkoutAdministrationModule {}
