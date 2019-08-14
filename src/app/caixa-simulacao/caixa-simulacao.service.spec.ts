import { TestBed } from '@angular/core/testing';

import { CaixaSimulacaoService } from './caixa-simulacao.service';

describe('CaixaSimulacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaixaSimulacaoService = TestBed.get(CaixaSimulacaoService);
    expect(service).toBeTruthy();
  });
});
