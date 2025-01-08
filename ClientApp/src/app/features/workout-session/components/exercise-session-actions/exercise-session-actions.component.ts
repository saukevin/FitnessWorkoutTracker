import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise-session-actions',
  standalone: false,
  templateUrl: './exercise-session-actions.component.html',
  styleUrl: './exercise-session-actions.component.scss',
})
export class ExerciseSessionActionsComponent implements OnInit, OnDestroy {
  @Input() onReset: Observable<void>;
  @Output() onCompleteCurrentExercise: EventEmitter<number> =
    new EventEmitter();
  @Output() onStartNextExercise: EventEmitter<void> = new EventEmitter();

  isExerciseOngoing: boolean | null = null;

  minutes: number = 0;
  seconds: number = 0;

  private timer: any;

  private onResetSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.onResetSubscription = this.onReset.subscribe({
      next: () => this.resetComponentVariables(),
    });
  }

  ngOnDestroy() {
    this.onResetSubscription.unsubscribe();
  }

  startTimer(): void {
    this.isExerciseOngoing = true;
    this.timer = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          clearInterval(this.timer);
        }
      }
    }, 1000);
  }

  completeCurrentExercise(): void {
    this.isExerciseOngoing = false;
    clearInterval(this.timer);
    const totalSeconds: number = this.minutes * 60 + this.seconds;
    this.onCompleteCurrentExercise.emit(totalSeconds);
  }

  private resetComponentVariables(): void {
    this.isExerciseOngoing = null;
    this.minutes = 0;
    this.seconds = 0;
  }
}
