import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeNumberToString',
  standalone: false,
})
export class TimeNumberToStringPipe implements PipeTransform {
  transform(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }
}
