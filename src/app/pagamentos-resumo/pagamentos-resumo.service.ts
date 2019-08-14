import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageHandler } from 'src/api/message-handler';
import { Observable } from 'rxjs';
import { Resumo } from '../models/resumo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagamentosResumoService {

  private resumoUrl = 'api/resumo'; // URL resumo
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

  /**
   * GET Resumo
   */
  getResumo(): Observable<Resumo[]> {
    return this.http.get<Resumo[]>(this.resumoUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Resumo[]>('getResumo', []))
      );
  }

}
