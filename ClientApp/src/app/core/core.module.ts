import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './components/shell/shell.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [ShellComponent, NavbarComponent],
  imports: [SharedModule],
  exports: [ShellComponent],
})
export class CoreModule {}
