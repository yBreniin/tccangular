import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MansComponent } from './mans/mans.component';

const routes: Routes = [
  {
    path: '', component: MansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MansRoutingModule { }
