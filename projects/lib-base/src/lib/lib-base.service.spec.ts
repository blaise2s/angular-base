import { TestBed } from '@angular/core/testing';

import { LibBaseService } from './lib-base.service';

describe('LibBaseService', () => {
  let service: LibBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
