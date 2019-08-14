import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { MessageHandler } from 'src/api/message-handler';
import { Observable } from 'rxjs';
import { Savings } from '../models/savings';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  private savingsUrl = 'api/savings'; // URL savings
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageHandler: MessageHandler) { }

  /**
   * GET Savings
   */
  getSavings(): Observable<Savings[]> {
    return this.http.get<Savings[]>(this.savingsUrl)
      .pipe(
        catchError(this.messageHandler.handleError<Savings[]>('getResumo', []))
      );
  }

  /**
   * POST: novo saving
   * @param saving - novo saving a ser adiciondo na lista de savings
   */
  addSaving(saving: Savings): Observable<Savings> {
    return this.http.post<Savings>(this.savingsUrl, saving, this.httpOptions)
      .pipe(
        tap((novoSaving: Savings) => this.messageHandler.log(`added novo Savings ${novoSaving.id}`)),
        catchError(this.messageHandler.handleError<Savings>('addSaving'))
      );
  }

  /**
   * DELETE: remove o saving
   * @param saving - saving para deletar
   */
  removeSaving(saving: Savings): Observable<Savings> {
    const id = typeof saving === 'number' ? saving : saving.id;
    const url = `${this.savingsUrl}/${id}`;

    return this.http.delete<Savings>(url, this.httpOptions).pipe(
      tap( _ => this.messageHandler.log(`deleted saving id=${id}`)),
      catchError(this.messageHandler.handleError<Savings>('removeSaving'))
    );
  }

}
