import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsPerBranchComponent } from './actors-per-branch.component';

describe('ActorsPerBranchComponent', () => {
  let component: ActorsPerBranchComponent;
  let fixture: ComponentFixture<ActorsPerBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsPerBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsPerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
