import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Economias } from '../economias';
import { PagamentosLista } from '../pagamentos-lista';
import { Resumo } from '../resumo';
import { Savings } from '../savings';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  private economiasUrl = 'api/economias'; // URL economias
  private pagamentosListaUrl = 'api/pagamentosLista'; // URL pagamentosLista
  private resumoUrl = 'api/resumo'; // URL resumo
  private savingsUrl = 'api/savings'; // URL savings

  constructor( private http: HttpClient ) { }

  /**
   * GET Economias
   */
  getEconomias(): Observable<Economias> {
    return this.http.get<Economias>(this.economiasUrl)
      .pipe(
        catchError(this.handleError<Economias>('getEconomias'))
      );
  }

  /**
   * GET Lista de Pagamentos
   */
  getPagamentosList(): Observable<PagamentosLista[]> {
    return this.http.get<PagamentosLista[]>(this.pagamentosListaUrl)
      .pipe(
        catchError(this.handleError<PagamentosLista[]>('getPagamentosList', []))
      );
  }

  /**
   * GET Resumo
   */
  getResumo(): Observable<Resumo[]> {
    return this.http.get<Resumo[]>(this.resumoUrl)
      .pipe(
        catchError(this.handleError<Resumo[]>('getResumo', []))
      );
  }

  /**
   * GET Savings
   */
  getSavings(): Observable<Savings[]> {
    return this.http.get<Savings[]>(this.savingsUrl)
      .pipe(
        catchError(this.handleError<Savings[]>('getResumo', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * exibe um log no console
   * @param log - mensagem de log
   */
  log(log: string) {
    console.log(log);
  }

}
