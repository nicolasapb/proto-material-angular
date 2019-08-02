import { Component, OnInit, Input } from '@angular/core';
import { PAGAMENTOS_LISTA } from '../mock-data/mock-pagamentos-lista';
import { TipoPagamento } from '../TipoPagamento';
import { PagamentosLista } from '../pagamentos-lista';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnInit {

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

  ngOnInit() {
    this.getTotal();
    this.getDif();
    this.pctFalta = this.falta / this.meta;
    this.pctTotal = 1 - this.pctFalta;
    this.parcelas = [{ total: this.total, falta: this.falta, pctTotal: this.pctTotal, pctFalta: this.pctFalta, meta: this.meta }];
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
