import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorsDistributionComponent } from './processors-distribution.component';

describe('ProcessorsDistributionComponent', () => {
  let component: ProcessorsDistributionComponent;
  let fixture: ComponentFixture<ProcessorsDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorsDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorsDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
