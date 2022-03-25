import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHighlightCardComponent } from './edit-highlight-card.component';

describe('EditHighlightCardComponent', () => {
  let component: EditHighlightCardComponent;
  let fixture: ComponentFixture<EditHighlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHighlightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHighlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
