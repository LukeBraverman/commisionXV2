import { TestBed } from '@angular/core/testing';

import { UserPovServiceService } from './user-pov-service.service';

describe('UserPovServiceService', () => {
  let service: UserPovServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPovServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
