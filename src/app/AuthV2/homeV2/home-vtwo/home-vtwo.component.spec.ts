import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVTwoComponent } from './home-vtwo.component';

describe('HomeVTwoComponent', () => {
  let component: HomeVTwoComponent;
  let fixture: ComponentFixture<HomeVTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
