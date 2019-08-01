import { Component, OnInit } from '@angular/core';
import { SAVINGS } from '../mock-data/mock-savings';
import { Savings } from '../savings';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  public savings: Savings[] = SAVINGS;
  public meta = 25500;
  public total: number = this.getTotal();
  public falta: number = this.getDif();
  public pctFalta: number = this.falta / this.meta;
  public pctTotal: number = 1 - this.pctFalta;

  public savingsHeader = [{ total: this.total, falta: this.falta, pctTotal: this.pctTotal, pctFalta: this.pctFalta, meta: this.meta }];
  public savingsHeaderColunas = ['total', 'falta', 'pctTotal', 'pctFalta', 'meta'];

  constructor() { }

  ngOnInit() { }

  getTotal(): number {
    return this.savings.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

  getDif(): number {
    const total = this.getTotal();
    return this.meta - total;
  }

}
