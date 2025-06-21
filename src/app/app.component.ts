import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  // title = 'mycollege-web-app';
  //    role = '';
  // isLoggedIn = false;

  // constructor(private auth: AuthService, private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) this.refresh();
  //   });
  // }

  // refresh() {
  //   this.isLoggedIn = this.auth.isLoggedIn();
  //   this.role = this.auth.getRole();
  // }

  // logout() {
  //   this.auth.logout();
  //   this.refresh();
  // }





  //   title = 'mycollege-web-app';
  // role = '';
  // isLoggedIn = false;
  // searchTerm = '';

  // constructor(
  //   private auth: AuthService,
  //   private router: Router,
  //   private scroller: ViewportScroller
  // ) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) this.refresh();
  //   });
  // }

  // refresh() {
  //   this.isLoggedIn = this.auth.isLoggedIn();
  //   this.role = this.auth.getRole();
  // }

  // logout() {
  //   this.auth.logout();
  //   this.refresh();
  // }

  // onSearch() {
  //   const query = this.searchTerm.toLowerCase().trim();

  //   if (query.includes('library')) {
  //     this.scroller.scrollToAnchor('library');
  //   } else if (query.includes('labs')) {
  //     this.scroller.scrollToAnchor('labs');
  //   } else if (query.includes('clubs')) {
  //     this.scroller.scrollToAnchor('clubs');
  //   } else if (query.includes('placement')) {
  //     this.scroller.scrollToAnchor('placement');
  //   } else {
  //     alert('Sorry, section not found!');
  //   }
  // }
//   title = 'mycollege-web-app';
// role = '';
// isLoggedIn = false;
// searchTerm = '';

// constructor(
// private auth: AuthService,
// private router: Router,
// private scroller: ViewportScroller
// ) {
// this.router.events.subscribe(event => {
// if (event instanceof NavigationEnd) this.refresh();
// });
// }

// refresh() {
// this.isLoggedIn = this.auth.isLoggedIn();
// this.role = this.auth.getRole();
// }

// logout() {
// this.auth.logout();
// this.refresh();
// this.router.navigate(['/login']);
// }

// onSearch() {
// const query = this.searchTerm.toLowerCase().trim();
// if (query.includes('library')) {
// this.scroller.scrollToAnchor('library');
// } else if (query.includes('labs')) {
// this.scroller.scrollToAnchor('labs');
// } else if (query.includes('clubs')) {
// this.scroller.scrollToAnchor('clubs');
// } else if (query.includes('placement')) {
// this.scroller.scrollToAnchor('placement');
// } else {
// alert('Sorry, section not found!');
// }
// }



title = 'mycollege-web-app';
role = '';
isLoggedIn = false;
username = '';
searchTerm = '';

constructor(
private auth: AuthService,
private router: Router,
private scroller: ViewportScroller
) {
this.router.events.subscribe(event => {
if (event instanceof NavigationEnd) this.refresh();
});
}

refresh() {
this.isLoggedIn = this.auth.isLoggedIn();
this.role = this.auth.getRole();
this.username = this.auth.getUserName(); // NEW LINE
}

logout() {
this.auth.logout();
this.refresh();
this.router.navigate(['/login']);
}

onSearch() {
const query = this.searchTerm.toLowerCase().trim();

// kotlin
// Copy
// Edit
if (query.includes('library')) {
  this.scroller.scrollToAnchor('library');
} else if (query.includes('labs')) { 
  this.scroller.scrollToAnchor('labs');
} else if (query.includes('clubs')) {
  this.scroller.scrollToAnchor('clubs');
} else if (query.includes('placement')) {
  this.scroller.scrollToAnchor('placement');
} else {
  alert('Sorry, section not found!');
}
}
}
