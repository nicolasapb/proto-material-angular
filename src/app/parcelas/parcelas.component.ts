import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PAGAMENTOS_LISTA } from '../../assets/mock-data/mock-pagamentos-lista';
import { TipoPagamento } from '../models/TipoPagamento';
import { PagamentosLista } from '../models/pagamentos-lista';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnChanges {

  @Input() meta: number;
  @Input() pagamentosLista: PagamentosLista[];

  public total: number;
  public falta: number;
  public pctFalta: number;
  public pctTotal: number;
  public parcelas: any[];
  public parcelasHeader = ['total', 'falta', 'pctTotal', 'pctFalta', 'meta'];

  constructor() {
   }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
      this.pagamentosLista = changes.pagamentosLista.currentValue;
      this.getTotal();
      this.getDif();
      this.pctFalta = this.falta / this.meta;
      if (this.pctFalta < 0) {
        this.pctFalta = 0;
      }
      this.pctTotal = 1 - this.pctFalta;
      if (this.falta < 0) {
        this.falta = 0;
      }
      this.parcelas = [{ total: this.total, falta: this.falta, pctTotal: this.pctTotal, pctFalta: this.pctFalta, meta: this.meta }];
    }
   }

  getTotal(): void {
    this.total = this.pagamentosLista.filter(t => t.tipo === TipoPagamento.parcela)
      .map(t => t.valorPago)
      .reduce((acc, value) => acc + value, 0);
  }

  getDif(): void {
    this.falta = this.meta - this.total;
  }
}
