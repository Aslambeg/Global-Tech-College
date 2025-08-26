import { Component } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent {
   notices = [
    { title: 'Holiday on 29th Aug', description: 'College will remain closed on 29th Aug due to festival.' },
    { title: 'Exam Timetable Released', description: 'Check the updated exam schedule in the portal.' },
    { title: 'Workshop on AI', description: 'Join us for an AI/ML workshop on 1st Sept.' }
  ];

}
