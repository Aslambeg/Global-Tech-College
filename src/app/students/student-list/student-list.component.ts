import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: any[] = [];

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.service.getStudents().subscribe(data => this.students = data);
  }

  editStudent(id: number) {
    this.router.navigate(['/edit-student', id]);
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure to delete this student?')) {
      this.service.deleteStudent(id).subscribe(() => this.fetchStudents());
    }
  }

}
