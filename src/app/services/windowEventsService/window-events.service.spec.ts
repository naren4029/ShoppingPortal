import { TestBed, inject } from '@angular/core/testing';

import { WindowEventsService } from './window-events.service';

describe('WindowEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowEventsService]
    });
  });

  it('should be created', inject([WindowEventsService], (service: WindowEventsService) => {
    expect(service).toBeTruthy();
  }));
});
