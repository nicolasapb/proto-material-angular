import { Component, OnInit } from '@angular/core';
import { Economias } from '../models/economias';
import { PagamentosLista } from '../models/pagamentos-lista';
import { Resumo } from '../models/resumo';
import { Savings } from '../models/savings'; 
import { EconomiasService } from '../economias/economias.service';
import { PagamentosListaService } from '../pagamentos-lista/pagamentos-lista.service';
import { PagamentosResumoService } from '../pagamentos-resumo/pagamentos-resumo.service';
import { SavingsService } from '../savings/savings.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  public economias: Economias;
  public pagamentosLista: PagamentosLista[];
  public resumo: Resumo[];
  public savings: Savings[];

  public metaParcelaUnica = 25500;
  public metaParcelas = 32500;

  constructor(
    private economiasService: EconomiasService,
    private pagamentosListaService: PagamentosListaService,
    private pagamentosResumoService: PagamentosResumoService,
    private savingsService: SavingsService) { }

  ngOnInit() {
    this.getEconomias();
    this.getPagamentosList();
    this.getResumo();
    this.getSavings();
  }

  getEconomias(): void {
    this.economiasService.getEconomias()
        .subscribe(economias => this.economias = economias );
  }

  getPagamentosList(): void {
    this.pagamentosListaService.getPagamentosList()
        .subscribe(pagamentosLista => this.pagamentosLista = pagamentosLista );
  }

  getResumo(): void {
    this.pagamentosResumoService.getResumo()
        .subscribe(resumo => this.resumo = resumo );
  }

  getSavings(): void {
    this.savingsService.getSavings()
        .subscribe(savings =>  {
          this.savings = savings;
        });
  }

}
