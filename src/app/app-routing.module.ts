import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth-form', pathMatch: 'full' },
  { path: 'auth-form', component: ContentComponent },
  { path: '**', redirectTo: 'auth-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
