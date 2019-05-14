import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor() {}
  @Output() selectedValue: EventEmitter<any> = new EventEmitter();
  value = '';
  title = 'Dynamic Input';
  nameList: any[] = [];
  message = 'Input from Child Component';
  lists: any[] = [
    { id: 1, name: 'Kyle' },
    { id: 2, name: 'Scot' },
    { id: 3, name: 'Tom' }
  ];

  ngOnInit() {}

  submit() {
    this.selectedValue.emit(this.value);
  }

  selectedList(event) {
    this.nameList = event.value;
  }
}
