import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  @Input() inputFromParent: any;

  @Output() clickEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleClick(event) {
    this.clickEvent.emit(event);
  }
}
