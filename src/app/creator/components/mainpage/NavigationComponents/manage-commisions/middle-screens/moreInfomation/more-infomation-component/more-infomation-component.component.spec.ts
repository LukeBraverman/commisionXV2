import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfomationComponentComponent } from './more-infomation-component.component';

describe('MoreInfomationComponentComponent', () => {
  let component: MoreInfomationComponentComponent;
  let fixture: ComponentFixture<MoreInfomationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfomationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfomationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
