import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'core';

  navList = [
    { id: 1, icon: 'account_circle', path: 'auth-form', name: 'Login Form' },
    {
      id: 2,
      icon: 'compare_arrows',
      path: 'dynamic-component',
      name: 'Dynamic Component'
    },
    {
      id: 3,
      icon: 'label_important',
      path: 'view-encapsulation',
      name: 'View Encapsulation'
    },
    {
      id: 4,
      icon: 'find_in_page',
      path: 'change-detection',
      name: 'Change Detection'
    },
    {
      id: 5,
      icon: 'settings_ethernet',
      path: 'check-directives',
      name: 'Directives'
    }
  ];
}
