import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})
export class RememberComponent implements OnInit {
  @Output() checked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChecked(value: boolean) {
    this.checked.emit(value);
  }
}
