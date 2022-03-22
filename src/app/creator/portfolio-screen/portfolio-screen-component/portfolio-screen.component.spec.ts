import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioScreen } from './portfolio-screen.component';

describe('PortfolioScreenComponentComponent', () => {
  let component: PortfolioScreen;
  let fixture: ComponentFixture<PortfolioScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioScreen ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
