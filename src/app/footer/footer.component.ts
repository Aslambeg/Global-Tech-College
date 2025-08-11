import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isDarkMode = false;
  public email:any='begaslam9109@gmail.com';
  public email1:any='';


constructor() {
// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
this.isDarkMode = savedTheme === 'dark';
this.applyTheme();
}

toggleTheme() {
this.isDarkMode = !this.isDarkMode;
localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
this.applyTheme();
}

private applyTheme() {
document.body.classList.toggle('dark-theme', this.isDarkMode);
}

}
