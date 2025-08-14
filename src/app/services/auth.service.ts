// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router, TitleStrategy } from '@angular/router';
// import { map, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/users';
//   private textUrl: any = 'http://localhost:3000/users';

//   constructor(private http: HttpClient, private router: Router) { }
//   getUsers(): Observable<any> {
//     return this.http.get(`${this.textUrl}/users`);
//   }
//   login(email: string, password: string): Observable<boolean> {
//     return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
//       map(users => {
//         if (users.length > 0) {
//           const user = users[0];
//           localStorage.setItem('user', JSON.stringify(user));
//           return true;
//         } else {
//           return false;
//         }
//       })
//     );
//   }

//   logout() {
//     localStorage.removeItem('user');
//     this.router.navigate(['/login']);
//   }

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('user');
//   }

//   getUser(): any {
//     const userJson = localStorage.getItem('user');
//     return userJson ? JSON.parse(userJson) : null;
//   }

//   getRole(): string {
//     return this.getUser()?.role || '';
//   }

//   getUserName(): string {
//     return this.getUser()?.name || '';
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://college-json-server-1.onrender.com/users';
  private textUrl: any = 'https://college-json-server-1.onrender.com/users';

  constructor(private http: HttpClient, private router: Router) {}

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.textUrl}/users`);
  }

  // Login user and store to localStorage
  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): any {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  getRole(): string {
    return this.getUser()?.role || '';
  }

  getUserName(): string {
    return this.getUser()?.name || '';
  }

  // ✅ Additional accessors for convenience
  getUserEmail(): string {
    return this.getUser()?.email || '';
  }

  getUserRole(): string {
    return this.getUser()?.role || '';
  }

  getToken(): string {
    return this.getUser()?.token || ''; // assuming your user object has token field
  }
}
