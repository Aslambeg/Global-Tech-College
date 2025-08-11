import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BScComponent } from './bsc.component';

describe('BScComponent', () => {
  let component: BScComponent;
  let fixture: ComponentFixture<BScComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BScComponent]
    });
    fixture = TestBed.createComponent(BScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
