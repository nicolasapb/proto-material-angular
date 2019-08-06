import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core'; 
import { PagamentosLista } from '../pagamentos-lista';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NovoPagamentoComponent } from '../novo-pagamento/novo-pagamento.component';
import { PagamentosService } from '../pagamentos-service/pagamentos.service';

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

  constructor(
    public dialog: MatDialog, 
    private pagamentoServie: PagamentosService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnChanges(changes: SimpleChanges): void { 
    if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
      this.pagamentosLista = changes.pagamentosLista.currentValue;
      console.log('atualizado', this.pagamentosLista)
    }
  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(NovoPagamentoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(novoPagamento => { 
      this.novoPagamento = novoPagamento as PagamentosLista; 
      this.adicionaNovoPagamento(this.novoPagamento);
    });
  }

  adicionaNovoPagamento(novoPagamento: PagamentosLista) {
     if (!novoPagamento) { return; }

     this.pagamentoServie.addPagamento(novoPagamento)
      .subscribe(novoPagamentoAdicionado => {
        this.pagamentosLista.push(novoPagamentoAdicionado);
        console.log(this.pagamentosLista);
        });
  }
}




































