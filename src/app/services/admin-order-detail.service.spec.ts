import { TestBed } from '@angular/core/testing';

import { AdminOrderDetailService } from './admin-order-detail.service';

describe('AdminOrderDetailService', () => {
  let service: AdminOrderDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrderDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
