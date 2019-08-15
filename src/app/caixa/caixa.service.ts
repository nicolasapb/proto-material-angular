import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Caixa } from './caixa';
import { MessageHandler } from 'src/api/message-handler';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  private caixaUrl = 'api/caixa'; // URL savings

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

  getCaixa(): Observable<Caixa[]> {
    return this.http.get<Caixa[]>(this.caixaUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Caixa[]>('getCaixa'))
      );
  }

  putCaixa(caixa: Caixa): Observable<Caixa> {
    return this.http.put<Caixa>(this.caixaUrl, caixa, this.httpOptions)
    .pipe(
      tap((updatedCaixa: Caixa) => this.messageHandler.log(`updated Caixa ${updatedCaixa}`)),
      catchError(this.messageHandler.handleError<Caixa>('postSimulacao'))
    );
  }
}
