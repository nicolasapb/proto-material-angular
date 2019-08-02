import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagamentosLista } from '../pagamentos-lista';
import { TipoPagamento } from '../TipoPagamento';

@Component({
  selector: 'app-novo-pagamento',
  templateUrl: './novo-pagamento.component.html',
  styleUrls: ['./novo-pagamento.component.css']
})
export class NovoPagamentoComponent {

  constructor(
    public dialogRef: MatDialogRef<NovoPagamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PagamentosLista
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
