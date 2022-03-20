import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingPageComponent } from './main-landing-page.component';

describe('MainLandingPageComponent', () => {
  let component: MainLandingPageComponent;
  let fixture: ComponentFixture<MainLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
