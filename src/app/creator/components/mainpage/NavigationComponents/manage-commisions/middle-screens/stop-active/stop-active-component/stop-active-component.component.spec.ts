import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopActiveComponentComponent } from './stop-active-component.component';

describe('StopActiveComponentComponent', () => {
  let component: StopActiveComponentComponent;
  let fixture: ComponentFixture<StopActiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopActiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopActiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
