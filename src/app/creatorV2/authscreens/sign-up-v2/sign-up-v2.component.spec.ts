import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpV2Component } from './sign-up-v2.component';

describe('SignUpV2Component', () => {
  let component: SignUpV2Component;
  let fixture: ComponentFixture<SignUpV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
