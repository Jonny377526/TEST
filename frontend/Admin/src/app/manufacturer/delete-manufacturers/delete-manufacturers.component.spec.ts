import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManufacturersComponent } from './delete-manufacturers.component';

describe('DeleteManufacturersComponent', () => {
  let component: DeleteManufacturersComponent;
  let fixture: ComponentFixture<DeleteManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteManufacturersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
