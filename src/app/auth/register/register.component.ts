import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // registerForm: FormGroup;
  // success = '';
  // error = '';
  // apiUrl = 'http://localhost:3000/users';

  // constructor(
  //   private fb: FormBuilder,
  //   private http: HttpClient,
  //   private router: Router
  // ) {
  //   this.registerForm = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     address: ['', Validators.required],
  //     age: ['', [Validators.required, Validators.min(16), Validators.max(100)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     role: ['', Validators.required]
  //   });
  // }

  // onRegister() {
  //   const formData = this.registerForm.value;
  //   this.http.get<any[]>(`${this.apiUrl}?email=${formData.email}`).subscribe(users => {
  //     if (users.length > 0) {
  //       this.error = 'Email already exists.';
  //       this.success = '';
  //     } else {
  //       this.http.post(this.apiUrl, formData).subscribe(() => {
  //         this.success = 'Registered successfully!';
  //         this.error = '';
  //         this.registerForm.reset();
  //         setTimeout(() => this.router.navigate(['/login']), 1500);
  //       });
  //     }
  //   });
  // }
  registerForm: FormGroup;
success = '';
error = '';
apiUrl = 'https://college-json-server-1.onrender.com/users';

constructor(
private fb: FormBuilder,
private http: HttpClient,
private router: Router
) {
this.registerForm = this.fb.group({
name: ['', [Validators.required, Validators.minLength(3)]],
address: ['', Validators.required],
age: ['', [Validators.required, Validators.min(16), Validators.max(100)]],
email: ['', [Validators.required, Validators.email],Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$')],
password: ['', [Validators.required, Validators.minLength(6)]],
role: ['', Validators.required]
});
}

onRegister() {
const formData = this.registerForm.value;
this.http.get<any[]>(`${this.apiUrl}?email=${formData.email}`).subscribe(users => {
  if (users.length > 0) {
    this.error = 'Email already exists.';
    this.success = '';
  } else {
    // Submit form data to backend (JSON server)
    this.http.post(this.apiUrl, formData).subscribe(() => {
      this.success = 'Registered successfully!';
      this.error = '';
      this.registerForm.reset();
      setTimeout(() => this.router.navigate(['/login']), 1500);
    }, () => {
      this.error = 'Something went wrong. Please try again.';
      this.success = '';
    });
  }
}, () => {
  this.error = 'Unable to verify email. Try again.';
});
}


}
