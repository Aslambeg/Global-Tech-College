import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  userName: string = '';
  userRole: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userRole = this.authService.getRole();

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  navigateTo(section: string) {
    // dynamically navigate based on section
    switch (section) {
      case 'assignments':
        this.router.navigate(['/assignments']);
        break;
      case 'notes':
        this.router.navigate(['/notes']);
        break;
      case 'schedule':
        this.router.navigate(['/schedule']);
        break;
      case 'queries':
        this.router.navigate(['/queries']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
