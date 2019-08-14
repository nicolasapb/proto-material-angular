import { TestBed } from '@angular/core/testing';

import { EconomiasService } from './economias.service';

describe('EconomiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EconomiasService = TestBed.get(EconomiasService);
    expect(service).toBeTruthy();
  });
});
