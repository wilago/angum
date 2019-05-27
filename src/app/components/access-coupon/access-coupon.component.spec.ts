import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCouponComponent } from './access-coupon.component';

describe('AccessCouponComponent', () => {
  let component: AccessCouponComponent;
  let fixture: ComponentFixture<AccessCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
