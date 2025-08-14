import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   private apiUrl = 'https://college-json-server-1.onrender.com/contactUs'; // Change to your backend URL

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // constructor() { }
}
