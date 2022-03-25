import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppedCommissionsComponent } from './stopped-commissions.component';

describe('StoppedCommissionsComponent', () => {
  let component: StoppedCommissionsComponent;
  let fixture: ComponentFixture<StoppedCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoppedCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppedCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
