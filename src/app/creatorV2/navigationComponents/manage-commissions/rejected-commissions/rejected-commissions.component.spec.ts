import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCommissionsComponent } from './rejected-commissions.component';

describe('RejectedCommissionsComponent', () => {
  let component: RejectedCommissionsComponent;
  let fixture: ComponentFixture<RejectedCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
