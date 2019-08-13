import { Component, OnInit } from '@angular/core';

import { CaixaService } from '../caixa-service/caixa.service';
import { Caixa } from '../models/caixa';
import { PagamentosService } from '../pagamentos-service/pagamentos.service';
import { Economias } from '../models/economias';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Simulacao } from '../models/simulacao';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  public caixa: Caixa[];
  public economias: Economias;
  public total = 510381;
  public entrada = 118000;
  public totalCaixa: number;
  public totalEconomias: number;
  public soma = [];
  public formCaixa: FormGroup;
  public simulacoes: Simulacao[];

  public colunasSimulacao = [
    'composicao',
    'total',
    'entrada',
    'pctEntrada',
    'financiamento',
    'pctFinanciamento',
    'reforma',
    'vlParcela',
    'finTaxas',
    'comporRenda',
  ];

  constructor(
    private caixaService: CaixaService,
    private pagamentosService: PagamentosService,
    private formBuilder: FormBuilder,
    ) {
      this.formCaixa = this.formBuilder.group({
        valor: []
      });
    }

  ngOnInit() {
    this.getCaixa();
    this.getEconomias();
  }

  getCaixa(): void {
    this.caixaService.getCaixa()
      .subscribe( caixa => {
          this.caixa = caixa;
          this.totalCaixa = this.getTotalCaixa();
        });
  }

  getEconomias(): void {
    this.pagamentosService.getEconomias()
      .subscribe( economias => {
        this.economias = economias;
        this.pagamentosService.getSavings()
        .subscribe(savings => {
          this.economias.poupanca = savings.map(t => t.valor)
            .reduce((acc, value) => acc + value, 0);
          this.totalEconomias = this.getTotalEconomias();
        });
      });
  }

  getTotalCaixa(): number {
    return this.caixa.filter(item => item.cheked === true)
      .reduce((total, value) => total + value.valor, 0);
  }

  getTotalEconomias(): number {
    return this.economias.cdb +
      this.economias.fgts +
      this.economias.poupanca +
      this.economias.tesouro;
  }

  marcaItemCaixa(item: Caixa, check: boolean) {
    const i = this.caixa.indexOf(item, 0);
    this.caixa[i].cheked = check;
    this.totalCaixa = this.getTotalCaixa();
  }

  keyDownFunction(event: KeyboardEvent, item: Caixa) {
    if (event.code === 'Enter' && this.formCaixa.value.valor) {
      console.log(event.code, this.formCaixa.value.valor, item);
    }
  }

  addSimulacao(): void {
    const composicao = this.caixa.filter( marcado => marcado.cheked === true )
      .map( comp => comp.investimento.toUpperCase())
      .toString();

    const total = this.totalCaixa;
    const entrada = this.totalCaixa + this.entrada;
    const pctEntrada = entrada / this.total;
    const financiamento = this.total - entrada;
    const pctFinanciamento = 1 - pctEntrada;
    const caixaFull = this.caixa.reduce((t, value) => t + value.valor, 0);
    const reforma = caixaFull - total;

    const simulacao: Simulacao = {
      composicao,
      total,
      entrada,
      pctEntrada,
      financiamento,
      pctFinanciamento,
      reforma
    };

    console.log(simulacao);

  }

}
