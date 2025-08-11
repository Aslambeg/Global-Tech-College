import { Component } from '@angular/core';

@Component({
  selector: 'app-bsc',
  templateUrl: './bsc.component.html',
  styleUrls: ['./bsc.component.scss']
})
export class BScComponent {
   course = {
    icon: 'assets/Computer Science1.webp',
    title: 'Computer Science',
    levels: 'BSc / MSc / Research',
    desc: `Dive deep into algorithms, AI, software development, and cutting-edge research in computing technologies.  
           Our program offers a balanced mix of theory and practical hands-on experience to prepare you for a dynamic career.`,
    features: [
      'Hands-on coding labs',
      'AI & Machine Learning modules',
      'Cloud computing workshops',
      'Industry internships',
      'Data Structures & Algorithms',
      'Cybersecurity fundamentals',
      'Open-source project contributions',
      'Capstone research project'
    ],
    prerequisites: [
      'Strong foundation in mathematics',
      'Basic programming skills',
      'Logical thinking and problem-solving'
    ],
    careerPaths: [
      'Software Developer / Engineer',
      'Data Scientist / Analyst',
      'AI/ML Engineer',
      'Cybersecurity Specialist',
      'Research Scientist',
      'Cloud Solutions Architect',
      'Tech Entrepreneur'
    ],
    duration: '3 years (BSc), 2 years (MSc)',
    mode: 'Full-time, Part-time, Online',
    contactEmail: 'csdept@exampleuniversity.edu'
  };

}
