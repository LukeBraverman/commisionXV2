import { TestBed } from '@angular/core/testing';

import { UploadCommissionServiceService } from './upload-commission-service.service';

describe('UploadCommissionServiceService', () => {
  let service: UploadCommissionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCommissionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
