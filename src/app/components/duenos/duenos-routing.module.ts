import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuenosComponent } from './components/duenos/duenos.component';


const routes: Routes = [
  {
    path: '',
    component: DuenosComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenosRoutingModule { }
