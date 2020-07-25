import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContainerComponent } from './layout/container/home-container.component';
import { DuenosComponent } from '../duenos/components/duenos/duenos.component';



const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
