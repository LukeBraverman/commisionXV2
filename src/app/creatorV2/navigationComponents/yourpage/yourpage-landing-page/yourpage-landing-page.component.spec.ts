import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourpageLandingPageComponent } from './yourpage-landing-page.component';

describe('YourpageLandingPageComponent', () => {
  let component: YourpageLandingPageComponent;
  let fixture: ComponentFixture<YourpageLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourpageLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourpageLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
