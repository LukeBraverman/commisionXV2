import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPendingComponentComponent } from './reject-pending-component.component';

describe('RejectPendingComponentComponent', () => {
  let component: RejectPendingComponentComponent;
  let fixture: ComponentFixture<RejectPendingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectPendingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectPendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
