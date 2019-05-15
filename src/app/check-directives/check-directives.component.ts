import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-directives',
  templateUrl: './check-directives.component.html',
  styleUrls: ['./check-directives.component.scss']
})
export class CheckDirectivesComponent implements OnInit {
  inputValue: any;
  users: any[] = [];

  constructor() {}

  ngOnInit() {}
  handleEventEmitting() {
    this.users = [
      { id: 1, name: 'Iron Man' },
      { id: 2, name: 'Spider Man' },
      { id: 3, name: 'Captain America' },
      { id: 4, name: 'Doctor Strange' },
      { id: 5, name: 'Hulk' }
    ];
  }
}
