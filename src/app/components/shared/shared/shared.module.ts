import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from '../galeria/galeria.component';
import { MaterialFormsModule } from 'src/app/material/material-forms.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [GaleriaComponent],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports: [
    GaleriaComponent,
    MaterialFormsModule,
    InfiniteScrollModule,
    
  ]
})
export class SharedModule { }
