import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Simulacao } from '../models/simulacao';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { MessageHandler } from 'src/api/message-handler';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CaixaSimulacaoService {

  private simulacaoUrl = 'api/simulacao'; // URL savings

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
}
