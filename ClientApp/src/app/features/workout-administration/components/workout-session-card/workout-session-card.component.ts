import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { WorkoutSessionDTO } from '../../../workout-session/models/workoutSessionDTO';
import { WorkoutAdministrationService } from '../../services/workout-administration.service';

@Component({
  selector: 'app-workout-session-card',
  standalone: false,

  templateUrl: './workout-session-card.component.html',
  styleUrl: './workout-session-card.component.scss',
})
export class WorkoutSessionCardComponent {
  @Input() workoutSession: WorkoutSessionDTO;
  @Output() onDelete: EventEmitter<void> = new EventEmitter();
}
