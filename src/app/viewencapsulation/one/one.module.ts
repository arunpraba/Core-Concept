import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [OneComponent],
  imports: [CommonModule, MaterialModule, OneRoutingModule]
})
export class OneModule {}
