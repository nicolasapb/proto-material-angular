import { Component, OnInit } from '@angular/core';

import { CaixaService } from './caixa.service';
import { Caixa } from './caixa';
import { Economias } from '../economias/economias';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EconomiasService } from '../economias/economias.service';
import { SavingsService } from '../savings/savings.service';

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
  public salvo: boolean;
  public checked = false;

  constructor(
    private caixaService: CaixaService,
    private economiasService: EconomiasService,
    private savingsService: SavingsService,
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
    this.economiasService.getEconomias()
      .subscribe( economias => {
        this.economias = economias;
        this.savingsService.getSavings()
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
    item.cheked = check;
    this.totalCaixa = this.getTotalCaixa();
  }

  keyDownFunction(event: KeyboardEvent, item: Caixa) {
    if (event.code === 'Enter' && this.formCaixa.value.valor) {
      item.valor = this.formCaixa.value.valor;
      this.caixaService.putCaixa(item).subscribe();
    }
  }

  desmarcaTudo(desmarcar: boolean): void {
    if (desmarcar) {
      this.caixa.forEach(c => c.cheked = false);
      this.totalCaixa = 0;
    }
  }

  marcaTudo(marcar: boolean): void {
    if (marcar) {
      this.caixa.forEach(c => c.cheked = true);
      this.totalCaixa = this.getTotalCaixa();
    }
  }

}
