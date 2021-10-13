import { TestBed } from '@angular/core/testing';

import { ApifsService } from './apifs.service';

describe('ApifsService', () => {
  let service: ApifsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
