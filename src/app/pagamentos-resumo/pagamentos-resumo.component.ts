import { Component, OnInit } from '@angular/core'; 
import { RESUMO } from '../mock-resumo';

@Component({
  selector: 'app-pagamentos-resumo',
  templateUrl: './pagamentos-resumo.component.html',
  styleUrls: ['./pagamentos-resumo.component.css']
})
export class PagamentosResumoComponent implements OnInit {

  public displayedColumns: string[] = ['tipoDeParcela', 'qtdParcelas', 'valor', 'total', 'dataInicial'];

  public resumo = RESUMO;

  constructor() { }

  ngOnInit() {
  }

  getTotal(): number {
    return this.resumo.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
