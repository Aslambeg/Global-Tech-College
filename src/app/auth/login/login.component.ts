import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  
  onLogin() {
  const { email, password } = this.loginForm.value;

  this.auth.login(email, password).subscribe(success => {
    if (success) {
      const role = this.auth.getRole();
      if (role === 'admin') this.router.navigate(['/dashboard/admin']);
      else if (role === 'student') this.router.navigate(['/dashboard/student']);
      else if (role === 'faculty') this.router.navigate(['/dashboard/faculty']);
    } else {
      this.error = 'Invalid credentials';
    }
  });
}



}
