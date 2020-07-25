import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProRoutingModule } from './pro-routing.module';
import { ProComponent } from './components/pro.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [ProComponent],
  imports: [
    CommonModule,
    ProRoutingModule,
    SharedModule,
    
  ]
})
export class ProModule { }
