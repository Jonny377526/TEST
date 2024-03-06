import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersDistributionComponent } from './manufacturers-distribution.component';

describe('ManufacturersDistributionComponent', () => {
  let component: ManufacturersDistributionComponent;
  let fixture: ComponentFixture<ManufacturersDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturersDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
