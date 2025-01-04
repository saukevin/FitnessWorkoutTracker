import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './components/shell/shell.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [ShellComponent, HomePageComponent],
  imports: [SharedModule],
  exports: [ShellComponent],
})
export class CoreModule {}
