import { TestBed } from '@angular/core/testing';

import { AdminOrderNhapService } from './admin-order-nhap.service';

describe('AdminOrderNhapService', () => {
  let service: AdminOrderNhapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrderNhapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
