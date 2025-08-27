import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
   programs = [
    {
      id: 'engineering',
      name: 'Engineering',
      description: 'Explore Computer Science, Mechanical, Civil, Electrical, and more with hands-on labs and real-world projects.',
      image: 'assets/programs/engineering.jpg',
      duration: '4 Years',
      eligibility: '10+2 with Science',
      highlights: [
        'State-of-the-art labs',
        'Experienced faculty',
        'Industry internships',
        'High placement rate'
      ]
    },
    {
      id: 'management',
      name: 'Management',
      description: 'BBA, MBA, and other programs designed to shape future business leaders with case studies & live projects.',
      image: 'assets/programs/management.jpg',
      duration: '2–3 Years',
      eligibility: 'Graduate (for MBA) / 10+2 (for BBA)',
      highlights: [
        'International exposure',
        'Entrepreneurship programs',
        'Corporate tie-ups',
        'Placement training'
      ]
    },
    {
      id: 'science',
      name: 'Pure Sciences',
      description: 'Deep dive into Physics, Chemistry, Mathematics, and Biology with research-driven curriculum.',
      image: 'assets/programs/science.jpg',
      duration: '3 Years',
      eligibility: '10+2 with Science',
      highlights: [
        'Research opportunities',
        'Modern laboratories',
        'Guest lectures',
        'Scholarship support'
      ]
    }
  ];

  getProgramById(id: string) {
    return this.programs.find(p => p.id.toLowerCase() === id.toLowerCase());
  }

  // constructor() { }
}
