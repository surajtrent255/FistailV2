import { TestBed } from '@angular/core/testing';

import { ApiendpointsService } from './apiendpoints.service';

describe('ApiendpointsService', () => {
  let service: ApiendpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiendpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
