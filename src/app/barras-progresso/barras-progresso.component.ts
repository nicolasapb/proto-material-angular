import { Component, OnInit, Input } from '@angular/core';
import { Resumo } from '../resumo';
import { PagamentosLista } from '../pagamentos-lista';
import { Savings } from '../savings';
import { TipoPagamento } from '../TipoPagamento';

@Component({
  selector: 'app-barras-progresso',
  templateUrl: './barras-progresso.component.html',
  styleUrls: ['./barras-progresso.component.css']
})
export class BarrasProgressoComponent implements OnInit {

  @Input() resumo: Resumo[];
  @Input() pagamentosLista: PagamentosLista[];
  @Input() savings: Savings[];
  @Input() metaParcelaUnica: number;
  @Input() metaParcelas: number;
 
  public valueEntrada: number;
  public valueParcelaUnica: number;
  public valueParcelas: number;

  constructor() { }

  ngOnInit() {
    this.calcValueEntrada();
    this.calcValueParcelaUnica();
    this.calcValueParcelas();
  }

  calcValueEntrada(): void {
   const sumEntradaPaga: number = this.pagamentosLista.filter(f => f.tipo === TipoPagamento.entrada)
    .map(v => v.valorPago)
    .reduce((total, valor) => total + valor, 0);

   const valorEntrada: number = this.resumo.filter(f => f.tipo === TipoPagamento.entrada)
    .map(v => v.valor)
    .reduce((total, valor) => total + valor, 0);

   this.valueEntrada = sumEntradaPaga / valorEntrada;

  }

  calcValueParcelaUnica(): void {
    const sumSavings: number = this.savings.map(t => t.valor)
      .reduce((total, valor) => total + valor, 0);

    this.valueParcelaUnica = sumSavings / this.metaParcelaUnica;
  }

  calcValueParcelas(): void {
    const sumParcelas: number = this.pagamentosLista.filter(f => f.tipo === TipoPagamento.parcela)
      .map(t => t.valorPago)
      .reduce((total, valor) => total + valor, 0);

    this.valueParcelas = sumParcelas / this.metaParcelas;
  }
}
