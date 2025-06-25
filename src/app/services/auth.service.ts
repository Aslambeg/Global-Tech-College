import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private loggedIn = false;
  // private role = '';
  // private apiUrl = 'http://localhost:3000/users';

  // constructor(private http: HttpClient, private router: Router) {}

  // login(email: string, password: string): Observable<boolean> {
  //   return this.http
  //     .get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
  //     .pipe(
  //       map(users => {
  //         if (users.length > 0) {
  //           this.loggedIn = true;
  //           this.role = users[0].role;
  //           return true;
  //         } else {
  //           this.loggedIn = false;
  //           return false;
  //         }
  //       })
  //     );
  // }

  // logout() {
  //   this.loggedIn = false;
  //   this.role = '';
  //   this.router.navigate(['/login']);
  // }

  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }

  // getRole(): string {
  //   return this.role;
  // }
  // // constructor() { }



  // private loggedIn = false;
  // private role = '';
  // private apiUrl = 'http://localhost:3000/users';

  // constructor(private http: HttpClient, private router: Router) {}

  // login(email: string, password: string): Observable<boolean> {
  //   const url = `${this.apiUrl}?email=${email}&password=${password}`;
  //   return this.http.get<any[]>(url).pipe(
  //     map(users => {
  //       if (users.length > 0) {
  //         const user = users[0];
  //         this.loggedIn = true;
  //         this.role = user.role;
  //         localStorage.setItem('user', JSON.stringify(user));
  //         return true;
  //       } else {
  //         this.loggedIn = false;
  //         return false;
  //       }
  //     })
  //   );
  // }

  // logout() {
  //   this.loggedIn = false;
  //   this.role = '';
  //   localStorage.removeItem('user');
  //   this.router.navigate(['/login']);
  // }

  // isLoggedIn(): boolean {
  //   return this.loggedIn || localStorage.getItem('user') !== null;
  // }

  // getRole(): string {
  //   return this.role || this.getUser()?.role || '';
  // }

  // getUser(): any {
  //   const userJson = localStorage.getItem('user');
  //   return userJson ? JSON.parse(userJson) : null;
  // }

  // getUserName(): string {
  //   return this.getUser()?.name || '';
  // }

  private apiUrl = 'http://localhost:3000/users';

constructor(private http: HttpClient, private router: Router) {}

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

logout() {
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
  
}
