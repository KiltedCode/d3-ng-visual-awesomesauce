import { TestBed, inject } from '@angular/core/testing';

import { ParksService } from './parks.service';

describe('ParksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParksService]
    });
  });

  it('should be created', inject([ParksService], (service: ParksService) => {
    expect(service).toBeTruthy();
  }));
});
