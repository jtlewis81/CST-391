import { TestBed } from '@angular/core/testing';

import { SermonServiceService } from './sermon-service.service';

describe('SermonServiceService', () => {
  let service: SermonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SermonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
