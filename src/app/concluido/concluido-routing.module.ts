import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcluidoComponent } from './concluido/concluido.component';

const routes: Routes = [
  {
    path: '', component: ConcluidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcluidoRoutingModule { }
