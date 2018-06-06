import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { NavService } from './nav.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NavService]
    });
  });

  it('should be created', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
  }));
});
