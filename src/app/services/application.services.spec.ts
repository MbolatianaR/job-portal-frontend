import { TestBed } from '@angular/core/testing';

import { ApplicationServices } from './application.services';

describe('ApplicationServices', () => {
  let service: ApplicationServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
