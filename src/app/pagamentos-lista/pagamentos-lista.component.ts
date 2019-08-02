import { Component, OnInit, Input } from '@angular/core';
import { PAGAMENTOS_LISTA } from '../mock-data/mock-pagamentos-lista';
import { PagamentosLista } from '../pagamentos-lista';

@Component({
  selector: 'app-pagamentos-lista',
  templateUrl: './pagamentos-lista.component.html',
  styleUrls: ['./pagamentos-lista.component.css']
})
export class PagamentosListaComponent implements OnInit {

  public displayedColumns: string[] = [
    'beneficiario', 'dtVencimento', 'valor', 'dtPagamento', 'valorPago', 'autenticacao', 'contaDestino', 'cnpj'
  ];

  @Input() pagamentosLista: PagamentosLista[];

  constructor() { }

  ngOnInit() {
  }

}




































