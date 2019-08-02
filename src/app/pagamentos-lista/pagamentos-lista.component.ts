import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { PagamentosLista } from '../pagamentos-lista';

@Component({
  selector: 'app-pagamentos-lista',
  templateUrl: './pagamentos-lista.component.html',
  styleUrls: ['./pagamentos-lista.component.css']
})
export class PagamentosListaComponent implements OnChanges {

  public displayedColumns: string[] = [
    'beneficiario', 'dtVencimento', 'valor', 'dtPagamento', 'valorPago', 'autenticacao', 'contaDestino', 'cnpj'
  ];

  @Input() pagamentosLista: PagamentosLista[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
      this.pagamentosLista = changes.pagamentosLista.currentValue;
    }
  }

}




































