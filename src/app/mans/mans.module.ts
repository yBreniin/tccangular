import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MansRoutingModule } from './mans-routing.module';
import { MansComponent } from './mans/mans.component';


@NgModule({
  declarations: [
    MansComponent
  ],
  imports: [
    CommonModule,
    MansRoutingModule
  ]
})
export class MansModule { }
