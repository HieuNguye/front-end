import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerListComponent } from './admin-customer-list.component';

describe('AdminCustomerListComponent', () => {
  let component: AdminCustomerListComponent;
  let fixture: ComponentFixture<AdminCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomerListComponent]
    });
    fixture = TestBed.createComponent(AdminCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
