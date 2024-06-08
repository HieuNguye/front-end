import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNccComponent } from './admin-ncc.component';

describe('AdminNccComponent', () => {
  let component: AdminNccComponent;
  let fixture: ComponentFixture<AdminNccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNccComponent]
    });
    fixture = TestBed.createComponent(AdminNccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
