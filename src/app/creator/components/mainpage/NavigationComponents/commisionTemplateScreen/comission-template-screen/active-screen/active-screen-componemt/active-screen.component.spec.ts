import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveScreen } from './active-screen.component';

describe('ActiveScreenComponemtComponent', () => {
  let component: ActiveScreen;
  let fixture: ComponentFixture<ActiveScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveScreen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
