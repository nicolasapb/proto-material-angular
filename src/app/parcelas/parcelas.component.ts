import { Component, OnInit } from '@angular/core';
import { PAGAMENTOS_LISTA } from '../mock-data/mock-pagamentos-lista';
import { TipoPagamento } from '../TipoPagamento';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnInit {

  public meta: number = 32500.00;
  public total: number = this.getTotal();
  public falta = this.getDif();
  public pctFalta = this.falta / this.meta;
  public pctTotal = 1 - this.pctFalta; 
  
  public parcelas = [{ total: this.total, falta: this.falta, pctTotal: this.pctTotal, pctFalta: this.pctFalta, meta: this.meta }];
  public parcelasHeader = ['total', 'falta', 'pctTotal', 'pctFalta', 'meta']

  constructor() {
   }

  ngOnInit() { 
  }

  getTotal() {
    return PAGAMENTOS_LISTA.filter(t => t.tipo === TipoPagamento.parcela)
      .map(t => t.valorPago)
      .reduce((acc, value) => acc + value, 0);
  }

  getDif(): number {
    const total = this.getTotal();
    return this.meta - total;
  } 
}
