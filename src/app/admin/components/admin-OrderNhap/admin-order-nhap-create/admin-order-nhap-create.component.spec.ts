import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderNhapCreateComponent } from './admin-order-nhap-create.component';

describe('AdminOrderNhapCreateComponent', () => {
  let component: AdminOrderNhapCreateComponent;
  let fixture: ComponentFixture<AdminOrderNhapCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderNhapCreateComponent]
    });
    fixture = TestBed.createComponent(AdminOrderNhapCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
