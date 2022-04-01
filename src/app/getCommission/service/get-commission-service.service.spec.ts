import { TestBed } from '@angular/core/testing';

import { GetCommissionServiceService } from './get-commission-service.service';

describe('GetCommissionServiceService', () => {
  let service: GetCommissionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCommissionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
