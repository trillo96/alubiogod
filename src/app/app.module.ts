import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFormsModule } from './material/material-forms.module';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritosDialogComponent } from './components/shared/favoritos-dialog/favoritos-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent, ToolbarComponent,FavoritosDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialFormsModule,
    HttpClientModule
    
  ],
  entryComponents: [
    FavoritosDialogComponent
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
