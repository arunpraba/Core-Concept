import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {
  user: any = {
    name: 'Ben',
    age: 22,
    location: 'Bangalore'
  };
  constructor() {}

  ngOnInit() {}

  addProp() {
    this.user.email = 'ben@ben.com';
  }

  changeUser() {
    this.user = {
      name: 'Steven',
      age: 43,
      location: 'California'
    };
  }

  changeName() {
    this.user.name = 'Tark';
  }
}
