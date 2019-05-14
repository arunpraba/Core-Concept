import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'on-push',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss']
})
export class OnPushComponent implements OnInit {
  @Input() user;
  constructor() {}

  ngOnInit() {}

  update() {
    this.user.name = 'Matt';
  }
}
