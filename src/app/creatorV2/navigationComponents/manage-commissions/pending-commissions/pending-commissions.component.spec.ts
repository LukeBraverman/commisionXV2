import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCommissionsComponent } from './pending-commissions.component';

describe('PendingCommissionsComponent', () => {
  let component: PendingCommissionsComponent;
  let fixture: ComponentFixture<PendingCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
