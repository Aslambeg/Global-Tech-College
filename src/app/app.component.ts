import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ThemeService } from 'ng2-charts';

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
   darkMode = false;
  title = 'mycollege-web-app';
  role = '';
  isLoggedIn = false;
  username = '';
  searchTerm = '';
  isDarkMode = false;
  // private email:any='begaslam9109@gmail.com';

  constructor(
    private auth: AuthService,
    private themeService: ThemeService,
    private router: Router,
    private scroller: ViewportScroller
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.refresh();
      }
    });
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
    this.refresh();
  }

  refresh() {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.role = this.auth.getRole();
    this.username = this.auth.getUserName();
  }

  logout() {
    this.auth.logout();
    this.refresh();
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  onSearch() {
    const query = this.searchTerm.toLowerCase().trim();
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
