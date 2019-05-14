import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckDirectivesRoutingModule } from './check-directives-routing.module';
import { CheckDirectivesComponent } from './check-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CheckDirectivesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    CheckDirectivesRoutingModule
  ]
})
export class CheckDirectivesModule {}
