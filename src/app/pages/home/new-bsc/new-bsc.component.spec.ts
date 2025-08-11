import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBScComponent } from './new-bsc.component';

describe('NewBScComponent', () => {
  let component: NewBScComponent;
  let fixture: ComponentFixture<NewBScComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBScComponent]
    });
    fixture = TestBed.createComponent(NewBScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
