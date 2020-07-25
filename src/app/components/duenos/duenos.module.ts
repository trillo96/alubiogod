import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuenosRoutingModule } from './duenos-routing.module';
import { DuenosComponent } from './components/duenos/duenos.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [DuenosComponent],
  imports: [
    CommonModule,
    DuenosRoutingModule,    
    SharedModule   
  ]
})
export class DuenosModule { }
