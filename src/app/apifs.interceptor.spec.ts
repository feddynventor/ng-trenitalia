import { TestBed } from '@angular/core/testing';

import { ApifsInterceptor } from './apifs.interceptor';

describe('ApifsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApifsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApifsInterceptor = TestBed.inject(ApifsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
