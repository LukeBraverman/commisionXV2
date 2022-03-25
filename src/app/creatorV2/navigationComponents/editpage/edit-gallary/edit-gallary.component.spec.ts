import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGallaryComponent } from './edit-gallary.component';

describe('EditGallaryComponent', () => {
  let component: EditGallaryComponent;
  let fixture: ComponentFixture<EditGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
