import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageHandler } from 'src/api/message-handler';
import { Observable } from 'rxjs';
import { PagamentosLista } from './pagamentos-lista';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagamentosListaService {

  private pagamentosListaUrl = 'api/pagamentosLista'; // URL pagamentosLista
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

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
        tap((pagamento: PagamentosLista) => this.messageHandler.log(`added novo Pagamento ${pagamento.id}`)),
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

}
