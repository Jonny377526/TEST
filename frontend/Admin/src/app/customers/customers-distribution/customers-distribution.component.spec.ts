import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDistributionComponent } from './customers-distribution.component';

describe('CustomersDistributionComponent', () => {
  let component: CustomersDistributionComponent;
  let fixture: ComponentFixture<CustomersDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
