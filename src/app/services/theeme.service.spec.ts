import { TestBed } from '@angular/core/testing';

import { TheemeService } from './theeme.service';

describe('TheemeService', () => {
  let service: TheemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
