import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { PagamentosLista } from '../pagamentos-lista';
import { MatDialog } from '@angular/material/dialog';
import { NovoPagamentoComponent } from '../novo-pagamento/novo-pagamento.component';

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

  novoPagamento: PagamentosLista;

  constructor(public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
      this.pagamentosLista = changes.pagamentosLista.currentValue;
    }
  }

  openDialog(): void { 
    const dialogRef = this.dialog.open(NovoPagamentoComponent, {
      // height: '600px',
      width: '400px',
      data: new PagamentosLista()
    });

    dialogRef.afterClosed().subscribe(novoPagamento => {
      console.log('The dialog was closed');
      this.novoPagamento = novoPagamento as PagamentosLista;
      console.log(this.novoPagamento);
    });
  }
}




































