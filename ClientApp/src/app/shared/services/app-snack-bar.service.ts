import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AppSnackBarService {
  private matSnackBar: MatSnackBar = inject(MatSnackBar);

  constructor() {}

  public open(
    message: string,
    actionText?: string,
    duration: number = 3000
  ): void {
    const config: MatSnackBarConfig = {
      duration,
    };

    this.matSnackBar.open(message, actionText, config);
  }
}
