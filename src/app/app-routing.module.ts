import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth-form', pathMatch: 'full' },
  { path: 'auth-form', component: ContentComponent },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: '**', redirectTo: 'auth-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
