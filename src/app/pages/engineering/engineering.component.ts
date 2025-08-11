import { Component } from '@angular/core';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent {
    course = {
    icon: 'assets/Engineering1.jpg',
    title: 'Engineering',
    levels: 'BTech / MTech',
    desc: `Comprehensive programs covering Mechanical, Civil, Electrical, and Electronics engineering with modern labs.  
           Gain hands-on experience with cutting-edge technology and real-world projects.`,
    features: [
      'Advanced prototyping facilities',
      'Industry-standard CAD tools',
      'Field visits and projects',
      'Collaborations with top firms',
      'Robotics and Automation labs',
      'Renewable energy studies',
      'Structural analysis workshops',
      'Embedded systems design'
    ],
    prerequisites: [
      'Strong foundation in Physics and Mathematics',
      'Basic understanding of engineering principles',
      'Interest in hands-on problem solving'
    ],
    careerPaths: [
      'Mechanical Engineer',
      'Civil Engineer',
      'Electrical Engineer',
      'Electronics Engineer',
      'Project Manager',
      'R&D Specialist',
      'Quality Assurance Engineer',
      'Consultant'
    ],
    duration: '4 years (BTech), 2 years (MTech)',
    mode: 'Full-time, Part-time',
    contactEmail: 'engineeringdept@exampleuniversity.edu'
  };

}
