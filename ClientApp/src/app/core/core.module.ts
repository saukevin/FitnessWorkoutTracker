import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [SharedModule],
  exports: [ShellComponent],
})
export class CoreModule {}
