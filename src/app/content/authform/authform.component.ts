import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RememberComponent } from '../remember/remember.component';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit, AfterContentInit {
  myForm: FormGroup;
  showMessgage = false;

  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @ContentChild(RememberComponent) remember: RememberComponent;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [],
      password: []
    });
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessgage = checked;
      });
    }
  }

  save() {
    this.submitted.emit(this.myForm.value);
  }
}
