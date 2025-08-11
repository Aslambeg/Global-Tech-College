import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
   message = '';
  visible = false;

  constructor(private notify: NotificationService) {}

  ngOnInit() {
    this.notify.message$.subscribe(msg => {
      this.message = msg;
      this.visible = true;
      setTimeout(() => this.visible = false, 3000);
    });
  }

}
