import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-sciences',
  templateUrl: './pure-sciences.component.html',
  styleUrls: ['./pure-sciences.component.scss']
})
export class PureSciencesComponent {
   course = {
    icon: 'assets/Science.webp',  // update with your actual image path
    title: 'Pure Sciences',
    levels: 'BSc / MSc / Research',
    desc: `Explore fundamental branches like Physics, Chemistry, and Biology with a strong focus on scientific methods, research, and experimentation.  
           Our program fosters critical thinking and innovation in natural sciences.`,
    features: [
      'State-of-the-art laboratories',
      'Interdisciplinary research projects',
      'Fieldwork and practical experiments',
      'Collaborations with research institutions',
      'Advanced spectroscopy and microscopy',
      'Biotechnology workshops',
      'Quantum mechanics and thermodynamics',
      'Environmental science studies'
    ],
    prerequisites: [
      'Strong foundation in mathematics and science',
      'Curiosity and analytical mindset',
      'Basic laboratory skills'
    ],
    careerPaths: [
      'Research Scientist',
      'Laboratory Technician',
      'Environmental Consultant',
      'Pharmaceutical Specialist',
      'Data Analyst',
      'Biotechnologist',
      'Science Educator',
      'Technical Writer'
    ],
    duration: '3 years (BSc), 2 years (MSc)',
    mode: 'Full-time, Part-time',
    contactEmail: 'puresciencesdept@exampleuniversity.edu'
  };

}
