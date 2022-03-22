import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Price } from './price-screen.component';

describe('PriceScreenComponentComponent', () => {
  let component: Price;
  let fixture: ComponentFixture<Price>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Price ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Price);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
