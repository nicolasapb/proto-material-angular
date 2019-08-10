import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Economias } from '../models/economias';
import { PagamentosLista } from '../models/pagamentos-lista';
import { Resumo } from '../models/resumo';
import { Savings } from '../models/savings';
import { MessageHandler } from '../../api/message-handler';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  private economiasUrl = 'api/economias'; // URL economias
  private pagamentosListaUrl = 'api/pagamentosLista'; // URL pagamentosLista
  private resumoUrl = 'api/resumo'; // URL resumo
  private savingsUrl = 'api/savings'; // URL savings

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

  /**
   * GET Economias
   */
  getEconomias(): Observable<Economias> {
    return this.http.get<Economias>(this.economiasUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Economias>('getEconomias'))
      );
  }

  /**
   * GET Lista de Pagamentos
   */
  getPagamentosList(): Observable<PagamentosLista[]> {
    return this.http.get<PagamentosLista[]>(this.pagamentosListaUrl)
      .pipe(
        catchError(this.messageHandler.handleError<PagamentosLista[]>('getPagamentosList', []))
      );
  }

  /**
   * POST: novo pagamento
   * @param novoPagamento - novo pagamento a ser adiciondo na lista de pagamentos
   */
  addPagamento(novoPagamento: PagamentosLista): Observable<PagamentosLista> {
    return this.http.post<PagamentosLista>(this.pagamentosListaUrl, novoPagamento, this.httpOptions)
      .pipe(
        tap((pagamento: PagamentosLista) => this.messageHandler.log(`added novo Pagamento ${pagamento}`)),
        catchError(this.messageHandler.handleError<PagamentosLista>('addPagamento'))
      );
  }

  /** PUT: update the hero on the server */
  updatePagamento(pagamento: PagamentosLista): Observable<any> {
    return this.http.put(this.pagamentosListaUrl, pagamento, this.httpOptions).pipe(
      tap(_ => this.messageHandler.log(`updated pagamento id=${pagamento.id}`)),
      catchError(this.messageHandler.handleError<any>('updatePagamento'))
    );
  }

  /**
   * DELETE: remove o pagamento
   * @param pagamento - pagamento para deletr
   */
  removePagamento(pagamento: PagamentosLista): Observable<PagamentosLista> {
    const id = typeof pagamento === 'number' ? pagamento : pagamento.id;
    const url = `${this.pagamentosListaUrl}/${id}`;

    return this.http.delete<PagamentosLista>(url, this.httpOptions).pipe(
      tap(_ => this.messageHandler.log(`deleted pagamento id=${id}`)),
      catchError(this.messageHandler.handleError<PagamentosLista>('removePagamento'))
    );
  }

  /**
   * GET Resumo
   */
  getResumo(): Observable<Resumo[]> {
    return this.http.get<Resumo[]>(this.resumoUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Resumo[]>('getResumo', []))
      );
  }

  /**
   * GET Savings
   */
  getSavings(): Observable<Savings[]> {
    return this.http.get<Savings[]>(this.savingsUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Savings[]>('getResumo', []))
      );
  }

}
