import { TestBed } from '@angular/core/testing';

import { TechnewsServicesService } from './technews-services.service';

describe('TechnewsServicesService', () => {
  let service: TechnewsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnewsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
