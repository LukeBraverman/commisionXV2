import { TestBed } from '@angular/core/testing';

import { FsOauthService } from './fs-oauth.service';

describe('FsOauthService', () => {
  let service: FsOauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsOauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
