import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageHandler } from 'src/api/message-handler';
import { Observable } from 'rxjs';
import { Economias } from '../models/economias';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EconomiasService {

  private economiasUrl = 'api/economias'; // URL economias
  private httpOptions = {
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
}
