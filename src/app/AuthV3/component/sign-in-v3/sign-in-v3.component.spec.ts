import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInV3Component } from './sign-in-v3.component';

describe('SignInV3Component', () => {
  let component: SignInV3Component;
  let fixture: ComponentFixture<SignInV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
