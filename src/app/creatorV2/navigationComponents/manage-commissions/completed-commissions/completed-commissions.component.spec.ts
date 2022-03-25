import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCommissionsComponent } from './completed-commissions.component';

describe('CompletedCommissionsComponent', () => {
  let component: CompletedCommissionsComponent;
  let fixture: ComponentFixture<CompletedCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
