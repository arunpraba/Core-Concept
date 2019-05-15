import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPipesComponent } from './check-pipes.component';

describe('CheckPipesComponent', () => {
  let component: CheckPipesComponent;
  let fixture: ComponentFixture<CheckPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
