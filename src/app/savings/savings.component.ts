import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Savings } from '../savings';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnChanges {

  @Input() savings: Savings[];
  @Input() meta: number;

  public total: number;
  public falta: number;
  public pctFalta: number;
  public pctTotal: number;
  public savingsHeader: any[];
  public savingsHeaderColunas = ['total', 'falta', 'pctTotal', 'pctFalta', 'meta'];

  formNovoValor: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formNovoValor = this.formBuilder.group({
      novoValor: []
    });
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.savings && changes.savings.currentValue) {
      this.savings = changes.savings.currentValue;
      this.getTotal();
      this.getDif();
      this.pctFalta = this.falta / this.meta;
      if (this.pctFalta < 0) {
        this.pctFalta = 0;
      }
      this.pctTotal = 1 - this.pctFalta;
      this.savingsHeader = [{
        total: this.total,
        falta: this.falta,
        pctTotal: this.pctTotal,
        pctFalta: this.pctFalta,
        meta: this.meta
      }];
    }
  }

  keyDownFunction(event: KeyboardEvent) {

    if (event.code === 'Enter' ) {
      console.log(event.code, this.formNovoValor.value);
    }
  }

  getTotal(): void {
    this.total = this.savings.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

  getDif(): void {
    this.falta = this.meta - this.total;
  }

}
