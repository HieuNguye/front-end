import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNccListComponent } from './admin-ncc-list.component';

describe('AdminNccListComponent', () => {
  let component: AdminNccListComponent;
  let fixture: ComponentFixture<AdminNccListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNccListComponent]
    });
    fixture = TestBed.createComponent(AdminNccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
