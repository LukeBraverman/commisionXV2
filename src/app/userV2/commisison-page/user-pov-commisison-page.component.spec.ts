import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userPovCommisisonPageComponent } from './user-pov-commisison-page.component';

describe('CommisisonPageComponent', () => {
  let component: userPovCommisisonPageComponent;
  let fixture: ComponentFixture<userPovCommisisonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userPovCommisisonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userPovCommisisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
