import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
  ],
})
export class SharedModule {}
