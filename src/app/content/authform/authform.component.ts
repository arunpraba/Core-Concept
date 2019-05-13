import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ContentChild,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RememberComponent } from '../remember/remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  myForm: FormGroup;
  showMessgage = false;

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @ContentChild(RememberComponent) remember: RememberComponent;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [],
      password: []
    });
  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessgage = checked;
      });
    }
  }

  ngAfterViewInit() {}

  save() {
    this.submitted.emit(this.myForm.value);
  }
}
