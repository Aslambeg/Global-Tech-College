import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
   day = 'Monday';
  schedule: any[] = [];

  ngOnInit(): void {
    this.schedule = [
      { day:'Monday',    subject:'Mathematics', room:'B-203', time:'10:00–11:00', teacher:'Dr. Rao' },
      { day:'Monday',    subject:'Physics',     room:'B-105', time:'12:00–01:00', teacher:'Prof. Mehta' },
      { day:'Tuesday',   subject:'DBMS',        room:'C-301', time:'09:00–10:00', teacher:'Ms. Joshi' },
      { day:'Wednesday', subject:'Angular',     room:'Lab-2', time:'11:00–01:00', teacher:'Mr. Khan' }
    ];
  }

}
