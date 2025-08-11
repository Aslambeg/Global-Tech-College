import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSciencesComponent } from './pure-sciences.component';

describe('PureSciencesComponent', () => {
  let component: PureSciencesComponent;
  let fixture: ComponentFixture<PureSciencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PureSciencesComponent]
    });
    fixture = TestBed.createComponent(PureSciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
