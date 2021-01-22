import { TestBed } from '@angular/core/testing';

import { GlobalniService } from './globalni.service';

describe('GlobalniService', () => {
  let service: GlobalniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
