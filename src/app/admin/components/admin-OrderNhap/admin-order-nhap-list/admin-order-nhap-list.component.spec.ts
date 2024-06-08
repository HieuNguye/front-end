import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderNhapListComponent } from './admin-order-nhap-list.component';

describe('AdminOrderNhapListComponent', () => {
  let component: AdminOrderNhapListComponent;
  let fixture: ComponentFixture<AdminOrderNhapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderNhapListComponent]
    });
    fixture = TestBed.createComponent(AdminOrderNhapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
