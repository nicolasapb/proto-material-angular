import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Economias } from '../economias';
import { ECONOMIAS } from '../mock-data/mock-economias';
import { PagamentosLista } from '../pagamentos-lista';
import { PAGAMENTOS_LISTA } from '../mock-data/mock-pagamentos-lista';
import { Resumo } from '../resumo';
import { RESUMO } from '../mock-data/mock-resumo';
import { Savings } from '../savings';
import { SAVINGS } from '../mock-data/mock-savings';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  constructor() { }

  getEconomias(): Observable<Economias> {
    return of(ECONOMIAS);
  }

  getPagamentosList(): Observable<PagamentosLista[]> {
    return of(PAGAMENTOS_LISTA);
  }

  getResumo(): Observable<Resumo[]> {
    return of(RESUMO);
  }

  getSavings(): Observable<Savings[]> {
    return of(SAVINGS);
  }
}
