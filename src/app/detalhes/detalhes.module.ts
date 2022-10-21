import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesRoutingModule } from './detalhes-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    DetalhesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DetalhesModule { }
