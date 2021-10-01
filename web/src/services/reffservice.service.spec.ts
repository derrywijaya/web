import { TestBed } from '@angular/core/testing';

import { ReffserviceService } from './reffservice.service';

describe('ReffserviceService', () => {
  let service: ReffserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReffserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
