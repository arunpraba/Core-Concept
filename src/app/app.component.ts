import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  navList = [
    { id: 1, path: 'auth-form', name: 'Ng Content' },
    { id: 1, path: 'auth-form', name: 'Content Child ' }
  ];
}
