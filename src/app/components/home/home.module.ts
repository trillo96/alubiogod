import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { MaterialFormsModule } from 'src/app/material/material-forms.module';
import { HomeContainerComponent } from './layout/container/home-container.component';



@NgModule({
  declarations: [HomeComponent, HomeContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialFormsModule
    
  ]
})
export class HomeModule { }
