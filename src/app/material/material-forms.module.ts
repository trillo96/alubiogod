import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';



import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  exports: [
    CommonModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    ScrollingModule,
    MatPaginatorModule,
    
    // Forms
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialFormsModule { }
