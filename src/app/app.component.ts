import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

<<<<<<< HEAD
  navList = [{ id: 1, path: 'auth-form', name: 'Login' }];
=======
  navList = [
    { id: 1, path: 'auth-form', name: 'Ng Content' },
    { id: 1, path: 'auth-form', name: 'Content Child ' }
  ];
>>>>>>> 87cec6498cb06f44f196dd41cb073f01037a87ca
}
