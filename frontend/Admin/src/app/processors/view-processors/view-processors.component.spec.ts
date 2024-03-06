import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessorsComponent } from './view-processors.component';

describe('ViewProcessorsComponent', () => {
  let component: ViewProcessorsComponent;
  let fixture: ComponentFixture<ViewProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
