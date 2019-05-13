import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChild,
  AfterViewInit,
  AfterContentInit,
  Renderer2
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
  @ViewChild('email') email: ElementRef;
  constructor(private fb: FormBuilder, private renderer: Renderer2) {}

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

  ngAfterViewInit() {
    /* View Children Changing Native Dom
    this.email.nativeElement.focus();
    this.email.nativeElement.setAttribute('placeholder',
      'Enter Your Email'); */
    /* Using renderer to change the dom
    First Parameter Element
    Second Parameter Attribute
    Third Parameter value
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter Your Email'
    );
    */
  }

  save() {
    this.submitted.emit(this.myForm.value);
  }
}
