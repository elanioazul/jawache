import { TestBed } from '@angular/core/testing';

import { UnserchedTermGuard } from './unserched-term.guard';

describe('UnserchedTermGuard', () => {
  let guard: UnserchedTermGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnserchedTermGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
