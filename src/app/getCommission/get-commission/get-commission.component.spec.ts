import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommissionComponent } from './get-commission.component';

describe('GetCommissionComponent', () => {
  let component: GetCommissionComponent;
  let fixture: ComponentFixture<GetCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
