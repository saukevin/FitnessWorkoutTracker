import { Component, Input } from '@angular/core';
import { ExerciseDTO } from '../../../workout-administration/models/exerciseDTO';

@Component({
  selector: 'app-exercise-list',
  standalone: false,
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.scss',
})
export class ExerciseListComponent {
  @Input() exercises: ExerciseDTO[];
}
