import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourpageGalleryComponent } from './yourpage-gallery.component';

describe('YourpageGalleryComponent', () => {
  let component: YourpageGalleryComponent;
  let fixture: ComponentFixture<YourpageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourpageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourpageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
