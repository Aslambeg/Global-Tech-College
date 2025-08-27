import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    private apiUrl = 'https://college-json-server-1.onrender.com/users';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfile(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  updateProfile(profileData: any): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.put<any>(`${this.apiUrl}/${userId}`, profileData);
  }

  // constructor() { }
}
