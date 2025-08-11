import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminStudentComponent } from './new-admin-student.component';

describe('NewAdminStudentComponent', () => {
  let component: NewAdminStudentComponent;
  let fixture: ComponentFixture<NewAdminStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAdminStudentComponent]
    });
    fixture = TestBed.createComponent(NewAdminStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
