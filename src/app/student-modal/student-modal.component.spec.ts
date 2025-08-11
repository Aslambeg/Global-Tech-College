import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModalComponent } from './student-modal.component';

describe('StudentModalComponent', () => {
  let component: StudentModalComponent;
  let fixture: ComponentFixture<StudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentModalComponent]
    });
    fixture = TestBed.createComponent(StudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
