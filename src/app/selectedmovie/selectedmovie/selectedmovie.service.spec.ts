import { TestBed } from '@angular/core/testing';

import { SelectedmovieService } from './selectedmovie.service';

describe('SelectedmovieService', () => {
  let service: SelectedmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
