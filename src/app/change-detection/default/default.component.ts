import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'default',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  constructor() {}
  @Input() user;

  ngOnInit() {}
  update() {}
}
