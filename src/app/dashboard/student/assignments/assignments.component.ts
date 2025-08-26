import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent {
   assignments: any[] = [];

  ngOnInit(): void {
    this.assignments = [
      { id:1, title:'Algebra Worksheet', subject:'Math',     due:'2025-09-12', status:'Pending', progress:40 },
      { id:2, title:'Mini Angular App',  subject:'CS',       due:'2025-09-20', status:'In Review', progress:80 },
      { id:3, title:'DBMS ER diagram',   subject:'DBMS',     due:'2025-09-10', status:'Submitted', progress:100 }
    ];
  }

  badgeClass(s: string){
    if(s==='Submitted') return 'bg-success';
    if(s==='In Review') return 'bg-warning text-dark';
    return 'bg-danger';
  }

}
