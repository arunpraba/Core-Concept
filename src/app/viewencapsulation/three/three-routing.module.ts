import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeComponent } from './three.component';

const routes: Routes = [{ path: '', component: ThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule {}
