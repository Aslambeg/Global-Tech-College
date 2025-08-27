import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
   programs = [
    { name: 'Computer Science', image: 'Computer Science1.png', desc: 'Learn coding, AI, and software engineering.' },
    { name: 'Engineering', image: 'Engineering1.png', desc: 'Core engineering disciplines and research.' },
    { name: 'Management', image: 'Management.png', desc: 'Leadership, strategy, and organizational skills.' },
    { name: 'Pure Sciences', image: 'Pure Sciences.png', desc: 'Explore physics, chemistry, and mathematics.' }
  ];

  constructor(private router: Router) {}

  explore(program: any) {
    // navigate to details page (future)
    this.router.navigate(['/program-details', program.name.toLowerCase().replace(' ', '-')]);
  }

  download(program: any) {
    // simple example: downloading dummy PDF
    const link = document.createElement('a');
    link.href = 'assets/sample-program.pdf'; // replace with actual program brochure
    link.download = `${program.name}-Brochure.pdf`;
    link.click();
  }

}
