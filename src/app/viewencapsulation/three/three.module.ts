import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeComponent } from './three.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ThreeComponent],
  imports: [CommonModule, MaterialModule, ThreeRoutingModule]
})
export class ThreeModule {}
