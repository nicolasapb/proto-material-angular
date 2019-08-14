import { TestBed } from '@angular/core/testing';

import { PagamentosListaService } from './pagamentos-lista.service';

describe('PagamentosListaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagamentosListaService = TestBed.get(PagamentosListaService);
    expect(service).toBeTruthy();
  });
});
