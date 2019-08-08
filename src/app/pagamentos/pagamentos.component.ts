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
    console.log('ngOnInit - pagametnos');
    this.getEconomias();
    this.getPagamentosList();
    this.getResumo();
    this.getSavings();
  }

  getEconomias(): void {
    this.pagamentosService.getEconomias()
        .subscribe(economias => this.economias = economias );
  }

  getPagamentosList(): void {
    this.pagamentosService.getPagamentosList()
        .subscribe(pagamentosLista => this.pagamentosLista = pagamentosLista );
  }

  getResumo(): void {
    this.pagamentosService.getResumo()
        .subscribe(resumo => this.resumo = resumo );
  }

  getSavings(): void {
    this.pagamentosService.getSavings()
        .subscribe(savings =>  this.savings = savings);
  }

}
