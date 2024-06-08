import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNccCreateComponent } from './admin-ncc-create.component';

describe('AdminNccCreateComponent', () => {
  let component: AdminNccCreateComponent;
  let fixture: ComponentFixture<AdminNccCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNccCreateComponent]
    });
    fixture = TestBed.createComponent(AdminNccCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
