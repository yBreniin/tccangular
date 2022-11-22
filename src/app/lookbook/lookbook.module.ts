import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookbookRoutingModule } from './lookbook-routing.module';
import { LookbookComponent } from './lookbook/lookbook.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [LookbookComponent],
  imports: [
    CommonModule,
    LookbookRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
  ],
})
export class LookbookModule {}
