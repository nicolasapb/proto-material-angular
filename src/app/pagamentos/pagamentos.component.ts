import { Component, OnInit } from '@angular/core';
import { Economias } from '../economias';
import { PagamentosLista } from '../pagamentos-lista';
import { Resumo } from '../resumo';
import { Savings } from '../savings';
import { PagamentosService } from '../pagamentos-service/pagamentos.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  public titulo = 'Pagamentos';

  public economias: Economias;
  public pagamentosLista: PagamentosLista[];
  public resumo: Resumo[];
  public savings: Savings[];

  public metaParcelaUnica = 25500;
  public metaParcelas = 32500;

  constructor(private pagamentosService: PagamentosService) { }

  ngOnInit() {
    this.getEconomias();
    this.getPagamentosList();
    this.getResumo();
    this.getSavings();  
  }

  getEconomias(): void {
    this.economias = this.pagamentosService.getEconomias();
  }

  getPagamentosList(): void {
    this.pagamentosLista = this.pagamentosService.getPagamentosList();
  }

  getResumo(): void {
    this.resumo = this.pagamentosService.getResumo();
  }

  getSavings(): void {
    this.savings = this.pagamentosService.getSavings();
  }

}
