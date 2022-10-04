import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomanRoutingModule } from './woman-routing.module';
import { WomanComponent } from './woman/woman.component';


@NgModule({
  declarations: [
    WomanComponent
  ],
  imports: [
    CommonModule,
    WomanRoutingModule
  ]
})
export class WomanModule { }
