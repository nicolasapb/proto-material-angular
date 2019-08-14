import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagamentosLista } from '../pagamentos-lista/pagamentos-lista';
import { TipoPagamento } from '../pagamentos-lista/TipoPagamento';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-pagamento',
  templateUrl: './novo-pagamento.component.html',
  styleUrls: ['./novo-pagamento.component.css']
})
export class NovoPagamentoComponent {

  data = new PagamentosLista();
  form: FormGroup;
  tituloForm: string;
  tipoPagamento: TipoPagamento;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NovoPagamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public pagamento: PagamentosLista
  ) {

    this.tituloForm = 'Novo Pagamento';
    if (pagamento) {
      this.data = pagamento;
      this.tituloForm = 'Editar Pagamento';
    }
    this.form = this.formBuilder.group({
      id: [this.data.id],
      beneficiario: [this.data.beneficiario, Validators.required],
      dtVencimento: [this.data.dtVencimento, Validators.required],
      valor: [this.data.valor, Validators.required],
      dtPagamento: [this.data.dtPagamento, Validators.required],
      valorPago: [this.data.valorPago, Validators.required],
      autenticacao: [this.data.autenticacao, Validators.required],
      contaDestino: [this.data.contaDestino, Validators.required],
      cnpj: [this.data.cnpj, Validators.required],
      tipo: [this.data.tipo || TipoPagamento.parcela]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.data = this.form.value;
    this.dialogRef.close(this.data);
  }
}
