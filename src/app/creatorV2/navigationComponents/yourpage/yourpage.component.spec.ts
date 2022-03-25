import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourpageComponent } from './yourpage.component';

describe('YourpageComponent', () => {
  let component: YourpageComponent;
  let fixture: ComponentFixture<YourpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
