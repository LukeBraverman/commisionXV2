import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteActiveScreenComponent } from './complete-active-screen.component';

describe('CompleteActiveScreenComponent', () => {
  let component: CompleteActiveScreenComponent;
  let fixture: ComponentFixture<CompleteActiveScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteActiveScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteActiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
