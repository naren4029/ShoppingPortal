import { TestBed, inject } from '@angular/core/testing';

import { SepServiceManagerService } from './sep-service-manager.service';

describe('SepServiceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepServiceManagerService]
    });
  });

  it('should be created', inject([SepServiceManagerService], (service: SepServiceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
