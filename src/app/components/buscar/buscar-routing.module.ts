import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from '../home/components/home/home.component';
import { DuenosComponent } from '../duenos/components/duenos/duenos.component';


const routes: Routes = [
  {
    path: '',
    component: BuscarComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarRoutingModule { }
