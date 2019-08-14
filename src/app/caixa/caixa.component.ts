import { Component, OnInit } from '@angular/core';

import { CaixaService } from '../caixa-service/caixa.service';
import { Caixa } from '../models/caixa';
import { PagamentosService } from '../pagamentos-service/pagamentos.service';
import { Economias } from '../models/economias';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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

  constructor(
    private caixaService: CaixaService,
    private pagamentosService: PagamentosService,
    private formBuilder: FormBuilder ) {
      this.formCaixa = this.formBuilder.group({
        valor: [{value: null}]
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

}
