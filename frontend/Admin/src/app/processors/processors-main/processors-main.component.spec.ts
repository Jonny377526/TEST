import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorsMainComponent } from './processors-main.component';

describe('ProcessorsMainComponent', () => {
  let component: ProcessorsMainComponent;
  let fixture: ComponentFixture<ProcessorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
