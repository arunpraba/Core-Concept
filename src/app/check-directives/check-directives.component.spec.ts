import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDirectivesComponent } from './check-directives.component';

describe('CheckDirectivesComponent', () => {
  let component: CheckDirectivesComponent;
  let fixture: ComponentFixture<CheckDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
