import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';

@Component({
  selector: 'app-workout-session-card',
  standalone: false,
  templateUrl: './workout-session-card.component.html',
  styleUrl: './workout-session-card.component.scss',
})
export class WorkoutSessionCardComponent {
  @Input() workoutSession: WorkoutSessionDTO;
  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  get workoutSessionDetailsRoute(): string {
    return `${this.workoutSession.workoutSessionId}`;
  }
}
