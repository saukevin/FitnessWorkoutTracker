import { inject, Pipe, PipeTransform } from '@angular/core';
import { TimeNumberToStringPipe } from '../../workout-session/pipes/time-number-to-string.pipe';

@Pipe({
  name: 'secondsToString',
  standalone: false,
})
export class SecondsToStringPipe implements PipeTransform {
  timeNumberToStringPipe: TimeNumberToStringPipe = inject(
    TimeNumberToStringPipe
  );

  transform(totalSeconds: number): string {
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds - minutes * 60;

    const minutesString: string =
      this.timeNumberToStringPipe.transform(minutes);
    const secondsString: string =
      this.timeNumberToStringPipe.transform(seconds);

    return minutesString + ':' + secondsString;
  }
}
