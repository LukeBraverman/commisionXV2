import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorHeaderComponentComponent } from './creator-header-component.component';

describe('HeaderComponentComponent', () => {
  let component: CreatorHeaderComponentComponent;
  let fixture: ComponentFixture<CreatorHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
