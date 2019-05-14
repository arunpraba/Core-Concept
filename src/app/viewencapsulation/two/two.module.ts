import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [TwoComponent],
  imports: [CommonModule, MaterialModule, TwoRoutingModule]
})
export class TwoModule {}
