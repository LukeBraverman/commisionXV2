import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponenentComponent } from './landing-page-componenent.component';

describe('LandingPageComponenentComponent', () => {
  let component: LandingPageComponenentComponent;
  let fixture: ComponentFixture<LandingPageComponenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
