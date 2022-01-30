import { TestBed } from '@angular/core/testing';

import { NgxAccessibilityService } from './ngx-accessibility.service';

describe('NgxAccessibilityService', () => {
  let service: NgxAccessibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAccessibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
