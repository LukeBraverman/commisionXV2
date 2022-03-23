import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHolderComponent } from './test-holder.component';

describe('TestHolderComponent', () => {
  let component: TestHolderComponent;
  let fixture: ComponentFixture<TestHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
