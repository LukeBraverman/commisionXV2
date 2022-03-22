import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVTwoComponent } from './auth-vtwo.component';

describe('AuthVTwoComponent', () => {
  let component: AuthVTwoComponent;
  let fixture: ComponentFixture<AuthVTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthVTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
