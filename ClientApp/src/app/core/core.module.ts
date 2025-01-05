import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './components/shell/shell.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [ShellComponent, HomePageComponent, NavbarComponent],
  imports: [SharedModule],
  exports: [ShellComponent],
})
export class CoreModule {}
