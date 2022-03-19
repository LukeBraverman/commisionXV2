import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponentComponent } from './main-page-component.component';

describe('MainPageComponentComponent', () => {
  let component: MainPageComponentComponent;
  let fixture: ComponentFixture<MainPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
