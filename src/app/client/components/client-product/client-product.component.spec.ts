import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductComponent } from './client-product.component';

describe('ClientProductComponent', () => {
  let component: ClientProductComponent;
  let fixture: ComponentFixture<ClientProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientProductComponent]
    });
    fixture = TestBed.createComponent(ClientProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
