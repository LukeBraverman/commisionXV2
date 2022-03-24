import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPageComponentComponent } from './help-page-component.component';

describe('HelpPageComponentComponent', () => {
  let component: HelpPageComponentComponent;
  let fixture: ComponentFixture<HelpPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
