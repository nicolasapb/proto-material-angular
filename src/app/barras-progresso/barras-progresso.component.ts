import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resumo } from '../pagamentos-resumo/resumo';
import { PagamentosLista } from '../pagamentos-lista/pagamentos-lista';
import { Savings } from '../savings/savings';
import { TipoPagamento } from '../pagamentos-lista/TipoPagamento';

@Component({
  selector: 'app-barras-progresso',
  templateUrl: './barras-progresso.component.html',
  styleUrls: ['./barras-progresso.component.css']
})
export class BarrasProgressoComponent implements OnChanges {

  @Input() resumo: Resumo[];
  @Input() pagamentosLista: PagamentosLista[];
  @Input() savings: Savings[];
  @Input() metaParcelaUnica: number;
  @Input() metaParcelas: number;

  public valueEntrada: number;
  public valueParcelaUnica: number;
  public valueParcelas: number;

  constructor() { }

 ngOnChanges(changes: SimpleChanges): void {

   if (changes.resumo && changes.resumo.currentValue) {
       this.resumo = changes.resumo.currentValue;
   }

   if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
       this.pagamentosLista = changes.pagamentosLista.currentValue; 
       this.calcValueParcelas(this.pagamentosLista);
   }

   if (changes.savings && changes.savings.currentValue) {
       this.savings = changes.savings.currentValue; 
       this.calcValueParcelaUnica(this.savings);
   }

   if (this.resumo && this.pagamentosLista) {
     this.calcValueEntrada(this.pagamentosLista, this.resumo);
   }

 }

  calcValueEntrada(pagamentosLista: PagamentosLista[], resumo: Resumo[]): void {
   const sumEntradaPaga: number = pagamentosLista.filter(f => f.tipo === TipoPagamento.entrada)
    .map(v => v.valorPago)
    .reduce((total, valor) => total + valor, 0);

   const valorEntrada: number = resumo.filter(f => f.tipo === TipoPagamento.entrada)
    .map(v => v.valor)
    .reduce((total, valor) => total + valor, 0);

   this.valueEntrada = sumEntradaPaga / valorEntrada;
  }

  calcValueParcelaUnica(savings: Savings[]): void {
    const sumSavings: number = savings.map(t => t.valor)
      .reduce((total, valor) => total + valor, 0);

    this.valueParcelaUnica = sumSavings / this.metaParcelaUnica;
  }

  calcValueParcelas(pagamentosLista: PagamentosLista[]): void {
    const sumParcelas: number = pagamentosLista.filter(f => f.tipo === TipoPagamento.parcela)
      .map(t => t.valorPago)
      .reduce((total, valor) => total + valor, 0);

    this.valueParcelas = sumParcelas / this.metaParcelas;
  }
}
