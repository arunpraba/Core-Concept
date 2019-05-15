import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { CheckPipesComponent } from './check-pipes/check-pipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth-form', pathMatch: 'full' },
  { path: 'auth-form', component: ContentComponent },
  { path: 'dynamic-component', component: DynamicComponentComponent },
  {
    path: 'view-encapsulation',
    component: ViewencapsulationComponent,
    children: [
      {
        path: 'one',
        loadChildren: './viewencapsulation/one/one.module#OneModule'
      },
      {
        path: 'two',
        loadChildren: './viewencapsulation/two/two.module#TwoModule'
      },
      {
        path: 'three',
        loadChildren: './viewencapsulation/three/three.module#ThreeModule'
      }
    ]
  },
  { path: 'change-detection', component: ChangeDetectionComponent },
  {
    path: 'check-directives',
    loadChildren:
      './check-directives/check-directives.module#CheckDirectivesModule'
  },
  { path: 'check-pipes', component: CheckPipesComponent },
  { path: '**', redirectTo: 'auth-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
