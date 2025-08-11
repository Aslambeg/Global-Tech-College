import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.scss']
})
export class AdminStudentsComponent {
  //   students: any[] = [];
  // searchTerm: string = '';
  // selectedCourse: string = '';
  // courses: string[] = [];

  // constructor(private studentService: StudentService) {}

  // ngOnInit(): void {
  // this.loadStudents();
  // }

  // loadStudents(): void {
  // this.studentService.getStudents().subscribe((data: any[]) => {
  // this.students = data;
  // this.courses = [...new Set(data.map(s => s.course))]; // extract unique courses
  // });
  // }

  // filteredStudents(): any[] {
  // return this.students.filter(student =>
  // (!this.searchTerm || student.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
  // (!this.selectedCourse || student.course === this.selectedCourse)
  // );
  // }

  // openAddStudentModal(): void {
  // // Open modal or navigate to add form
  // console.log('Add student form/modal triggered');
  // }

  // editStudent(student: any): void {
  // // Navigate to edit form or open modal
  // console.log('Edit student:', student);
  // }

  // deleteStudent(id: number): void {
  // if (confirm('Are you sure you want to delete this student?')) {
  // this.studentService.deleteStudent(id).subscribe(() => {
  // this.students = this.students.filter(s => s.id !== id);
  // });
  // }
  // }
  students: any[] = [];
  searchTerm = '';
  selectedCourse = '';
  courses: string[] = ['BCA', 'BBA', 'MCA', 'MBA'];
  studentForm!: FormGroup;
  isEditMode = false;
  selectedStudentId: number | null = null;
  showModal = false;

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchStudents();
    this.initForm();
  }

  initForm(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
    });
  }

  fetchStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  filteredStudents(): any[] {
    return this.students.filter(s =>
      s.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCourse === '' || s.course === this.selectedCourse)
    );
  }

  openAddStudentModal(): void {
    this.isEditMode = false;
    this.selectedStudentId = null;
    this.studentForm.reset();
    this.showModal = true;
  }

  editStudent(student: any): void {
    this.isEditMode = true;
    this.selectedStudentId = student.id;
    this.studentForm.patchValue(student);
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitForm(): void {
    if (this.studentForm.invalid) return;

    const studentData = this.studentForm.value;

    if (this.isEditMode && this.selectedStudentId !== null) {
      this.studentService.updateStudent(this.selectedStudentId, studentData).subscribe(() => {
        this.fetchStudents();
        this.closeModal();
      });
    } else {
      this.studentService.addStudent(studentData).subscribe(() => {
        this.fetchStudents();
        this.closeModal();
      });
    }
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => this.fetchStudents());
    }
  }

}
