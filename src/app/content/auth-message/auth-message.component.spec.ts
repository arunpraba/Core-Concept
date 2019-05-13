import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMessageComponent } from './auth-message.component';

describe('AuthMessageComponent', () => {
  let component: AuthMessageComponent;
  let fixture: ComponentFixture<AuthMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
