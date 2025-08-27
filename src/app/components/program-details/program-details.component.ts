import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent {
   program: any;

  constructor(
    private route: ActivatedRoute,
    private programsService: ProgramsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.program = this.programsService.getProgramById(id);
    }
  }
}
