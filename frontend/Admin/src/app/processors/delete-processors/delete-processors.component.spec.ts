import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProcessorsComponent } from './delete-processors.component';

describe('DeleteProcessorsComponent', () => {
  let component: DeleteProcessorsComponent;
  let fixture: ComponentFixture<DeleteProcessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProcessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProcessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
