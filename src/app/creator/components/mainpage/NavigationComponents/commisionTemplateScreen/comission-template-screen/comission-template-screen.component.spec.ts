import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionTemplateScreenComponent } from './comission-template-screen.component';

describe('ComissionTemplateScreenComponent', () => {
  let component: ComissionTemplateScreenComponent;
  let fixture: ComponentFixture<ComissionTemplateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComissionTemplateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComissionTemplateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
