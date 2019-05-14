import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';

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
  { path: '**', redirectTo: 'auth-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
