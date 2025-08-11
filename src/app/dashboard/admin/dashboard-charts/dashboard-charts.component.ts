import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent {
  studentsPerCourseLabels = ['BCA', 'BBA', 'B.Tech'];
studentsPerCourseData = [40, 35, 50];

barChartOptions: ChartConfiguration<'bar'>['options'] = {
responsive: true,
};
barChartType: 'bar' = 'bar';

barChartData: ChartConfiguration<'bar'>['data'] = {
labels: this.studentsPerCourseLabels,
datasets: [
{ data: this.studentsPerCourseData, label: 'Students Enrolled' }
]
};

constructor() {}

ngOnInit(): void {}

}
