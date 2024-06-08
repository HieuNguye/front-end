import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOderDetailComponent } from './admin-oder-detail.component';

describe('AdminOderDetailComponent', () => {
  let component: AdminOderDetailComponent;
  let fixture: ComponentFixture<AdminOderDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOderDetailComponent]
    });
    fixture = TestBed.createComponent(AdminOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
