import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPendingComponentComponent } from './accept-pending-component.component';

describe('AcceptPendingComponentComponent', () => {
  let component: AcceptPendingComponentComponent;
  let fixture: ComponentFixture<AcceptPendingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptPendingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
