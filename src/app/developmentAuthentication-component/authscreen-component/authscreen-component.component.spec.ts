import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthscreenComponentComponent } from './authscreen-component.component';

describe('AuthscreenComponentComponent', () => {
  let component: AuthscreenComponentComponent;
  let fixture: ComponentFixture<AuthscreenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthscreenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthscreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
