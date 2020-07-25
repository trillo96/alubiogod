import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SharedModule } from '../shared/shared/shared.module';






@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    SharedModule,
    
   
  ]
})
export class BuscarModule { }
