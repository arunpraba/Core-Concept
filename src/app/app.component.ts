import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  navList = [
    { id: 1, path: 'auth-form', name: 'Login Form' },
    { id: 2, path: 'dynamic-component', name: 'Dynamic Component' },
    { id: 3, path: 'view-encapsulation', name: 'View Encapsulation' }
  ];
}
