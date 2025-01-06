import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise-form-card',
  standalone: false,
  templateUrl: './exercise-form-card.component.html',
  styleUrl: './exercise-form-card.component.scss',
})
export class ExerciseFormCardComponent {
  @Input() form: FormGroup;
  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
