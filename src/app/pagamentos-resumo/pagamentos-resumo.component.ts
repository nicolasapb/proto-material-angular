import { Component, OnInit, Input } from '@angular/core';
import { Resumo } from '../resumo';

@Component({
  selector: 'app-pagamentos-resumo',
  templateUrl: './pagamentos-resumo.component.html',
  styleUrls: ['./pagamentos-resumo.component.css']
})
export class PagamentosResumoComponent implements OnInit {

  public displayedColumns: string[] = ['tipoDeParcela', 'qtdParcelas', 'valor', 'total', 'dataInicial'];

  @Input() resumo: Resumo[];

  constructor() { }

  ngOnInit() {
  }

  getTotal(): number {
    return this.resumo.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
