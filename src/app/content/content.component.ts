import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  rememberUser = false;
  constructor() {}

  ngOnInit() {}

  createUser(value: any) {
    console.log('Create user', value);
  }

  loginUser(value: any) {
    console.log('Login user', value, 'Remember Me:', this.rememberUser);
  }

  rememberMe(value: boolean) {
    this.rememberUser = value;
    console.log(this.rememberUser);
  }
}
