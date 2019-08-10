import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resumo } from '../models/resumo';

@Component({
  selector: 'app-pagamentos-resumo',
  templateUrl: './pagamentos-resumo.component.html',
  styleUrls: ['./pagamentos-resumo.component.css']
})
export class PagamentosResumoComponent implements OnChanges {
  public displayedColumns: string[] = ['tipoDeParcela', 'qtdParcelas', 'valor', 'total', 'dataInicial'];

  @Input() resumo: Resumo[];
  public total: number;

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resumo && changes.resumo.currentValue) {
      this.resumo = changes.resumo.currentValue;
      this.total = this.getTotal(this.resumo); 
    }
  }


  getTotal(resumo: Resumo[]): number {
    return resumo.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
