import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckDirectivesRoutingModule } from './check-directives-routing.module';
import { CheckDirectivesComponent } from './check-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [CheckDirectivesComponent, StructuralDirectivesComponent, NgForComponent],
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
