import { TestBed } from '@angular/core/testing';

import { AlwaysAuthChildrenGuardGuard } from './always-auth-children-guard.guard';

describe('AlwaysAuthChildrenGuardGuard', () => {
  let guard: AlwaysAuthChildrenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlwaysAuthChildrenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
