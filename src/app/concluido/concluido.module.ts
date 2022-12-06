import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcluidoRoutingModule } from './concluido-routing.module';
import { ConcluidoComponent } from './concluido/concluido.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConcluidoComponent
  ],
  imports: [
    CommonModule,
    ConcluidoRoutingModule,
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
export class ConcluidoModule { }
