import { TestBed } from '@angular/core/testing';

import { AdminNccService } from './admin-ncc.service';

describe('AdminNccService', () => {
  let service: AdminNccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
