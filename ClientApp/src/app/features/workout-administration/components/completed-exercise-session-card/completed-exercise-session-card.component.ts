import { Component, Input } from '@angular/core';
import { ExerciseSessionDTO } from '../../../workout-session/models/exerciseSessionDTO';

@Component({
  selector: 'app-completed-exercise-session-card',
  standalone: false,
  templateUrl: './completed-exercise-session-card.component.html',
  styleUrl: './completed-exercise-session-card.component.scss',
})
export class CompletedExerciseSessionCardComponent {
  @Input() exerciseSession: ExerciseSessionDTO;
}
