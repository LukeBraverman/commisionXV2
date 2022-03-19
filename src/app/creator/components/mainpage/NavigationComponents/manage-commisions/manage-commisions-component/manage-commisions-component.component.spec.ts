import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommisionsComponentComponent } from './manage-commisions-component.component';

describe('ManageCommisionsComponentComponent', () => {
  let component: ManageCommisionsComponentComponent;
  let fixture: ComponentFixture<ManageCommisionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCommisionsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCommisionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
