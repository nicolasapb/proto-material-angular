import { Component, OnInit, Input, OnChanges, SimpleChanges, ApplicationRef, Output, EventEmitter } from '@angular/core';
import { PagamentosLista } from '../models/pagamentos-lista';
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
     'beneficiario', 'dtVencimento', 'valor', 'dtPagamento', 'valorPago', 'autenticacao', 'contaDestino', 'cnpj', 'edit',
  ];

  @Input() pagamentosLista: PagamentosLista[];
  @Output() updateData = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private pagamentoServie: PagamentosService,
    private appRef: ApplicationRef
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pagamentosLista && changes.pagamentosLista.currentValue) {
      this.pagamentosLista = changes.pagamentosLista.currentValue;
    }
  }

  openDialog(pagamento?: PagamentosLista): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (pagamento) {
      dialogConfig.data = {
        id: pagamento.id,
        beneficiario: pagamento.beneficiario,
        dtVencimento: pagamento.dtVencimento,
        valor: pagamento.valor,
        dtPagamento: pagamento.dtPagamento,
        valorPago: pagamento.valorPago,
        autenticacao: pagamento.autenticacao,
        contaDestino: pagamento.contaDestino,
        cnpj: pagamento.cnpj,
        tipo: pagamento.tipo,
      };
    }

    const dialogRef = this.dialog.open(NovoPagamentoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(pagamentoRetorno => {

      if (!pagamentoRetorno) { return; }

      if (this.pagamentosLista.find( achou => pagamentoRetorno.id === achou.id )) {
        const modPagamento = pagamentoRetorno as PagamentosLista;
        this.modificaPagamento(modPagamento);
      } else {
        const novoPagamento = pagamentoRetorno as PagamentosLista;
        this.adicionaNovoPagamento(novoPagamento);
      }

    });

    this.appRef.tick();
  }

  adicionaNovoPagamento(novoPagamento: PagamentosLista) {
     this.pagamentoServie.addPagamento(novoPagamento)
      .subscribe(_ => this.updateData.emit(null));

     this.appRef.tick();
  }

  editItem(item: PagamentosLista): void {
    this.openDialog(item);
  }

  modificaPagamento(modPagamento: PagamentosLista) {
    this.pagamentoServie.updatePagamento(modPagamento)
      .subscribe( _ => this.updateData.emit(null) );
  }

  deleteItem(item: PagamentosLista): void {
    this.pagamentoServie.removePagamento(item)
      .subscribe( _ => this.updateData.emit(null));
  }
}




































