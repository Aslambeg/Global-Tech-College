import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
   studentForm: FormGroup;
  studentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.studentId = +this.route.snapshot.paramMap.get('id')!;
    if (this.studentId) {
      this.service.getStudentById(this.studentId).subscribe(data => {
        this.studentForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.studentId) {
      this.service.updateStudent(this.studentId, this.studentForm.value).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.service.addStudent(this.studentForm.value).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }

}
