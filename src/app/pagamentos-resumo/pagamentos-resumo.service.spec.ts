import { TestBed } from '@angular/core/testing';

import { PagamentosResumoService } from './pagamentos-resumo.service';

describe('PagamentosResumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagamentosResumoService = TestBed.get(PagamentosResumoService);
    expect(service).toBeTruthy();
  });
});
