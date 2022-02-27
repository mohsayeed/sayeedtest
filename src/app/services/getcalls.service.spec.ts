import { TestBed } from '@angular/core/testing';

import { GetcallsService } from './getcalls.service';

describe('GetcallsService', () => {
  let service: GetcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
