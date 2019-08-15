import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Simulacao } from './simulacao';
import { MessageHandler } from 'src/api/message-handler';
import { catchError, tap } from 'rxjs/operators';
import { ParametrosSimulacao } from './parametrosSimulacao';

@Injectable({
  providedIn: 'root'
})
export class CaixaSimulacaoService {

  private simulacaoUrl = 'api/simulacao'; // URL Simulcao
  private parametrosUrl = 'api/parametrosSimulacao';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

  getSimulacao(): Observable<Simulacao[]> {
    return this.http.get<Simulacao[]>(this.simulacaoUrl)
    .pipe(
      catchError(this.messageHandler.handleError<Simulacao[]>('getSimulacao'))
    );
  }

  postSimulacao(novaSimulacao: Simulacao): Observable<Simulacao> {
    return this.http.post<Simulacao>(this.simulacaoUrl, novaSimulacao, this.httpOptions)
    .pipe(
      tap((simulacao: Simulacao) => this.messageHandler.log(`added nova Simulacao ${simulacao.id}`)),
      catchError(this.messageHandler.handleError<Simulacao>('postSimulacao'))
    );
  }

  deleteSimulacao(simulacao: Simulacao): Observable<Simulacao> {
    const id = typeof simulacao === 'number' ? simulacao : simulacao.id;
    const url = `${this.simulacaoUrl}/${id}`;

    return this.http.delete<Simulacao>(url, this.httpOptions).pipe(
      tap(_ => this.messageHandler.log(`deleted simulacao id=${id}`)),
      catchError(this.messageHandler.handleError<Simulacao>('deleteSimulacao'))
    );
  }

  putSimulacao(simulacao: Simulacao): Observable<any> {
    return this.http.put(this.simulacaoUrl, simulacao, this.httpOptions).pipe(
      tap(_ => this.messageHandler.log(`updated simulacao`)),
      catchError(this.messageHandler.handleError<any>('putSimulacao'))
    );
  }

  getParametrosSimulacao(): Observable<ParametrosSimulacao> {
    return this.http.get<ParametrosSimulacao>(this.parametrosUrl)
      .pipe(
        catchError(this.messageHandler.handleError<ParametrosSimulacao>('getParametrosSimulacao'))
      );
  }

  putParametrosSimulacao(param: ParametrosSimulacao): Observable<ParametrosSimulacao> {
    return this.http.put<ParametrosSimulacao>(this.parametrosUrl, param, this.httpOptions)
      .pipe(
        tap( _ => this.messageHandler.log('updated parametros simulacao')),
        catchError(this.messageHandler.handleError<ParametrosSimulacao>('putParametrosSimulacao'))
      );
  }

}
