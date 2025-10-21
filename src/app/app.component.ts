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
  title = 'mycollege-web-app';
  role = '';
  isLoggedIn = false;
  username = '';
  searchTerm = '';
  isDarkMode = false;

  // 🔹 Dataset for dynamic search
  data = [
    { name: 'Library', anchor: 'library' },
    { name: 'Labs', anchor: 'labs' },
    { name: 'Clubs', anchor: 'clubs' },
    { name: 'Placement', anchor: 'placement' },
    { name: 'Admission', route: '/admission' },
    { name: 'Events', route: '/events' },
    { name: 'Contact', route: '/contact' },
    { name: 'About Us', route: '/about' }
  ];

  filteredResults: any[] = [];

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

  // 🔹 Dynamic search with live suggestions
  onSearch() {
    const query = this.searchTerm.toLowerCase().trim();
    if (!query) {
      this.filteredResults = [];
      return;
    }

    this.filteredResults = this.data.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }

  // 🔹 Navigate to section or page when clicked
  goTo(item: any) {
    if (item.anchor) {
      this.scroller.scrollToAnchor(item.anchor);
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
    this.filteredResults = []; // hide results after selection
    this.searchTerm = '';
  }
}
