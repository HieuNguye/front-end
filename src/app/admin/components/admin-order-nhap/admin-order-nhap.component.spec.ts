import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderNhapComponent } from './admin-order-nhap.component';

describe('AdminOrderNhapComponent', () => {
  let component: AdminOrderNhapComponent;
  let fixture: ComponentFixture<AdminOrderNhapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderNhapComponent]
    });
    fixture = TestBed.createComponent(AdminOrderNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
