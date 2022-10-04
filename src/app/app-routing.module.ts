import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'home'
  },

  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'lookbook',
    loadChildren: ()=> import('./lookbook/lookbook.module').then(m => m.LookbookModule)
  },
  {
    path: 'mans',
    loadChildren: ()=> import('./mans/mans.module').then(m => m.MansModule)
  },
  {
    path: 'sales',
    loadChildren: ()=> import('./sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: 'stores',
    loadChildren: ()=> import('./stores/stores.module').then(m => m.StoresModule)
  },
  {
    path: 'woman',
    loadChildren: ()=> import('./woman/woman.module').then(m => m.WomanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
