import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  // constructor(private auth: AuthService, private router: Router) {}

  // logout() {
  //   this.auth.logout();
  // }

  // goTo(path: string) {
  //   this.router.navigate([path]);
  // }
//   username: string = '';
// role: string = '';

// constructor(private auth: AuthService, private router: Router) {}

// ngOnInit() {
// this.username = this.auth.getUserName(); // Assumes getUsername() is available in AuthService
// this.role = this.auth.getRole();
// }

// logout() {
// this.auth.logout();
// }

// goTo(path: string) {
// this.router.navigate([path]);
// }
// ngOnInIt(){
//   console.log("Data")
// }
//     username: string = '';
// role: string = '';

// constructor(private auth: AuthService, private router: Router) {}

// ngOnInit(): void {
// this.username = this.auth.getUserName();
// this.role = this.auth.getUserRole();
// }

// // goTo(path: string): void {
// // this.router.navigate([path]);
// // }
// goTo(path: string): void {
// this.router.navigate([path]);
// }

// logout(): void {
// this.auth.logout();
// }
    username: string = '';
role: string = '';

constructor(private authService: AuthService) {}

ngOnInit(): void {
this.username = this.authService.getUserName();
this.role = this.authService.getRole();
}

goTo(url: string) {
window.location.href = url; // alternative to router.navigate since <router-outlet> is not used
}

}
