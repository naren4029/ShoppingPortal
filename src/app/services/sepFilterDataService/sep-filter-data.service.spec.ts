import { TestBed, inject } from '@angular/core/testing';

import { SepFilterDataService } from './sep-filter-data.service';

describe('SepFilterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepFilterDataService]
    });
  });

  it('should be created', inject([SepFilterDataService], (service: SepFilterDataService) => {
    expect(service).toBeTruthy();
  }));
});
