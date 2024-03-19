import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomeComponent],
})
export class ComponentsModule {}
