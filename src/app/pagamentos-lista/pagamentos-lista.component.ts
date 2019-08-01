import { Component, OnInit } from '@angular/core';  
import { PAGAMENTOS_LISTA } from '../mock-pagamentos-lista';

@Component({
  selector: 'app-pagamentos-lista',
  templateUrl: './pagamentos-lista.component.html',
  styleUrls: ['./pagamentos-lista.component.css']
})
export class PagamentosListaComponent implements OnInit {

  public displayedColumns: string[] = ['beneficiario', 'dtVencimento', 'valor', 'dtPagamento', 'valorPago', 'autenticacao', 'contaDestino', 'cnpj'];

  public pagamentosLista = PAGAMENTOS_LISTA;

  constructor() { }

  ngOnInit() {
  } 

}




































