import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxComponentComponent } from './chatbox-component.component';

describe('ChatboxComponentComponent', () => {
  let component: ChatboxComponentComponent;
  let fixture: ComponentFixture<ChatboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatboxComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
