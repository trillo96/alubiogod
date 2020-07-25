import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule) },
  { path: 'owners', loadChildren: () => import('src/app/components/duenos/duenos.module').then(m => m.DuenosModule) },
  { path: 'search', loadChildren: () => import('src/app/components/buscar/buscar.module').then(m => m.BuscarModule) },
  { path: 'pro', loadChildren: () => import('src/app/components/pro/pro.module').then(m => m.ProModule) }

 
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
