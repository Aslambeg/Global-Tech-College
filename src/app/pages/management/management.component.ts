import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
   course = {
    icon: 'assets/Management1.jpg',
    title: 'Management',
    levels: 'BBA / MBA',
    desc: `Develop leadership skills with a focus on business strategy, finance, marketing, and entrepreneurship.  
           Our program is designed to prepare you for the dynamic world of business and management.`,
    features: [
      'Case study approach',
      'Global exchange programs',
      'Startup incubation support',
      'Industry mentorship',
      'Financial modeling workshops',
      'Digital marketing training',
      'Leadership and team management',
      'Ethics and corporate governance'
    ],
    prerequisites: [
      'Basic understanding of economics',
      'Strong communication skills',
      'Analytical and problem-solving mindset'
    ],
    careerPaths: [
      'Business Analyst',
      'Marketing Manager',
      'Financial Consultant',
      'HR Manager',
      'Operations Manager',
      'Entrepreneur',
      'Management Consultant',
      'Project Manager'
    ],
    duration: '3 years (BBA), 2 years (MBA)',
    mode: 'Full-time, Part-time, Online',
    contactEmail: 'managementdept@exampleuniversity.edu'
  };

}
