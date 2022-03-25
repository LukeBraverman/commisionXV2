import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCommissionsComponent } from './active-commissions.component';

describe('ActiveCommissionsComponent', () => {
  let component: ActiveCommissionsComponent;
  let fixture: ComponentFixture<ActiveCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
