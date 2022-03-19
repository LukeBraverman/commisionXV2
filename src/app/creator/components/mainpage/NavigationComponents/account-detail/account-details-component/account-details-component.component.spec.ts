import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsComponentComponent } from './account-details-component.component';

describe('AccountDetailsComponentComponent', () => {
  let component: AccountDetailsComponentComponent;
  let fixture: ComponentFixture<AccountDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
