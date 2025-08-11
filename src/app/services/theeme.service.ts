import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheemeService {
  private themeLinkId = 'prime-theme';

  setTheme(themeName: string) {
    let themeLink = document.getElementById(this.themeLinkId) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = this.themeLinkId;
      themeLink.rel = 'stylesheet';
      document.head.appendChild(themeLink);
    }

    themeLink.href = `assets/themes/${themeName}/theme.css`;
  }

  // constructor() { }
}
