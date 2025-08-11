import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // constructor() { }
   private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  show(message: string) {
    this.messageSubject.next(message);
  }
}
