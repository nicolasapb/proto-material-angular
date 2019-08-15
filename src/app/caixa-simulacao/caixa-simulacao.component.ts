import { Component, OnInit, Input, ApplicationRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Simulacao } from './simulacao';
import { CaixaSimulacaoService } from './caixa-simulacao.service';
import { Caixa } from '../caixa/caixa';
import { ParametrosSimulacao } from './parametrosSimulacao';

@Component({
  selector: 'app-caixa-simulacao',
  templateUrl: './caixa-simulacao.component.html',
  styleUrls: ['./caixa-simulacao.component.css']
})
export class CaixaSimulacaoComponent implements OnInit {

  @Input() caixa: Caixa[];
  @Input() total: number;
  @Input() entrada: number;
  @Input() totalCaixa: number;
  @Output() saved = new EventEmitter();

  public simulacoes: Simulacao[];
  public parametrosSimulacao: ParametrosSimulacao;
  public formSim: FormGroup;

  public colunasSimulacao = [
    'composicao',
    'edit',
    'vlParcela',
    'total',
    'entrada',
    'pctEntrada',
    'financiamento',
    'pctFinanciamento',
    'reforma',
    'finTaxas',
    'comporRenda',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: CaixaSimulacaoService ) {
    this.formSim = this.formBuilder.group({
      id: [],
      composicao: [{value: null, disabled: true}, [Validators.required]],
      total: [{value: null, disabled: true}, [Validators.required]],
      entrada: [{value: null, disabled: true}, [Validators.required]],
      pctEntrada: [{value: null, disabled: true}, [Validators.required]],
      financiamento: [{value: null, disabled: true}, [Validators.required]],
      pctFinanciamento: [{value: null, disabled: true}, [Validators.required]],
      reforma: [{value: null, disabled: true}, [Validators.required]],
      vlParcela: [null, [Validators.required]],
      finTaxas: [null],
      comporRenda: [null],
    });
   }

  ngOnInit() {
    this.getSimulacoes();
    this.getParametrosSimulacao();
  }

  getSimulacoes(): void {
    this.service.getSimulacao()
      .subscribe(simulacoes => this.simulacoes = simulacoes);
  }

  getParametrosSimulacao(): void {
    this.service.getParametrosSimulacao()
      .subscribe(parametros => this.parametrosSimulacao = parametros);
  }

  addSimulacao(): void {
    const composicao = this.caixa.filter( marcado => marcado.cheked === true )
      .map( comp => comp.investimento.toUpperCase())
      .toString();

    const total = this.totalCaixa;
    const entrada = this.totalCaixa + this.entrada;
    const pctEntrada = entrada / this.total;
    const financiamento = this.total - entrada;
    const pctFinanciamento = 1 - pctEntrada;
    const caixaFull = this.caixa.reduce((t, value) => t + value.valor, 0);
    const reforma = caixaFull - total;

    this.formSim.setValue({
      id: null,
      composicao,
      total ,
      entrada ,
      pctEntrada,
      financiamento ,
      pctFinanciamento,
      reforma,
      vlParcela: null,
      finTaxas: null,
      comporRenda: null,
    });

  }

  deleteItem(simulacao: Simulacao): void {
    this.service.deleteSimulacao(simulacao).subscribe( _ => this.ngOnInit());
  }

  editItem(simulacao: Simulacao): void {
    this.formSim.setValue({
      id: simulacao.id,
      composicao: simulacao.composicao,
      total: simulacao.total,
      entrada: simulacao.entrada,
      pctEntrada: simulacao.pctEntrada,
      financiamento: simulacao.financiamento,
      pctFinanciamento: simulacao.pctFinanciamento,
      reforma: simulacao.reforma,
      vlParcela: simulacao.vlParcela,
      finTaxas: simulacao.finTaxas,
      comporRenda: simulacao.comporRenda,
    });

  }

  clearForm(): void {
    this.formSim.reset();
  }

  saveSimulacao(): void {
    const formValues = this.formSim.getRawValue();

    const novaSimulacao: Simulacao = {
      id: formValues.id,
      composicao: formValues.composicao,
      total: formValues.total,
      entrada: formValues.entrada,
      pctEntrada: formValues.pctEntrada,
      financiamento: formValues.financiamento,
      pctFinanciamento: formValues.pctFinanciamento,
      reforma: formValues.reforma,
      vlParcela: formValues.vlParcela,
      finTaxas: formValues.finTaxas,
      comporRenda: formValues.comporRenda,
    };

    if (this.simulacoes.find(simulacao => simulacao.id === novaSimulacao.id)) {
      this.service.putSimulacao(novaSimulacao).subscribe(_ => this.ngOnInit());
      this.formSim.reset();
    } else {
      this.service.postSimulacao(novaSimulacao).subscribe( _ => this.ngOnInit());
      this.formSim.reset();
      this.saved.emit(true);
    }

  }

}
