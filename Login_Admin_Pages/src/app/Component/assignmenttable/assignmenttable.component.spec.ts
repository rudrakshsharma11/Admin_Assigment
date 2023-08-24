import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmenttableComponent } from './assignmenttable.component';

describe('AssignmenttableComponent', () => {
  let component: AssignmenttableComponent;
  let fixture: ComponentFixture<AssignmenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmenttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
