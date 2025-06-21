import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
