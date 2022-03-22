import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatV3Component } from './chat-v3.component';

describe('ChatV3Component', () => {
  let component: ChatV3Component;
  let fixture: ComponentFixture<ChatV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
