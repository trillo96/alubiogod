import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProComponent } from './components/pro.component';


const routes: Routes = [
  {
    path: '',
    component: ProComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProRoutingModule { }
