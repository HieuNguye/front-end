import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeListComponent } from './admin-employee-list.component';

describe('AdminEmployeeListComponent', () => {
  let component: AdminEmployeeListComponent;
  let fixture: ComponentFixture<AdminEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEmployeeListComponent]
    });
    fixture = TestBed.createComponent(AdminEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
