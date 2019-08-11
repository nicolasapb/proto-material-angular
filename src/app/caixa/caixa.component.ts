import { Component, OnInit } from '@angular/core';

import { CaixaService } from '../caixa-service/caixa.service';
import { Caixa } from '../models/caixa';
import { PagamentosService } from '../pagamentos-service/pagamentos.service';
import { Economias } from '../models/economias';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  public caixa: Caixa;
  public economias: Economias;
  public total = 510381;
  public entrada = 118000;
  public totalCaixa: number;
  public totalEconomias: number;
  public soma = [];

  constructor(
    private caixaService: CaixaService,
    private pagamentosService: PagamentosService ) { }

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
        this.totalEconomias = this.getTotalEconomias();
      });
  }

  getTotalCaixa(): number {
    return this.caixa.carro +
      this.caixa.ppr +
      this.caixa.prev +
      this.caixa.cdb +
      this.caixa.fgts +
      this.caixa.poupanca +
      this.caixa.tesouro;
    }

    getTotalEconomias(): number {
      return this.economias.cdb +
        this.economias.fgts +
        this.economias.poupanca +
        this.economias.tesouro;
    }

    getIndexCaixa(i: number, check: boolean) {
      const keys = Object.keys(this.caixa);
      console.log(i, keys[i], check);
      console.log(this.caixa[keys[i]]);
      if (check) {
        this.soma.push(this.caixa[keys[i]]);
      }
      
      console.log(this.soma);
    }

}
