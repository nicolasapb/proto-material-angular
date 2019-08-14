import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { Simulacao } from './simulacao';
import { CaixaSimulacaoService } from './caixa-simulacao.service';
import { Caixa } from '../caixa/caixa';

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

  public simulacoes: Simulacao[];
  public formSim: FormGroup;

  public colunasSimulacao = [
    'composicao',
    'total',
    'entrada',
    'pctEntrada',
    'financiamento',
    'pctFinanciamento',
    'reforma',
    'vlParcela',
    'finTaxas',
    'comporRenda',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: CaixaSimulacaoService ) {
    this.formSim = this.formBuilder.group({
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
  }

  getSimulacoes(): void {
    this.service.getSimulacao()
      .subscribe(simulacoes => this.simulacoes = simulacoes);
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

  saveSimulacao(): void {
    const formValues = this.formSim.getRawValue();
    console.log(formValues);
    const novaSimulacao: Simulacao = {
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

    console.log(novaSimulacao);
    this.service.postSimulacao(novaSimulacao).subscribe( _ => this.ngOnInit());
    this.formSim.reset();
  }

}
