import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrasProgressoComponent } from './barras-progresso/barras-progresso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { PagamentosResumoComponent } from './pagamentos-resumo/pagamentos-resumo.component';
import { PagamentosListaComponent } from './pagamentos-lista/pagamentos-lista.component';
import { SavingsComponent } from './savings/savings.component';
import { EconomiasComponent } from './economias/economias.component';
import { ChartsModule } from 'ng2-charts';
import { ParcelasComponent } from './parcelas/parcelas.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../api/in-memory-data.service';
import { NovoPagamentoComponent } from './novo-pagamento/novo-pagamento.component';
import { CaixaComponent } from './caixa/caixa.component';
import { CaixaSimulacaoComponent } from './caixa-simulacao/caixa-simulacao.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BarrasProgressoComponent,
    DashboardComponent,
    PagamentosComponent,
    PagamentosResumoComponent,
    PagamentosListaComponent,
    SavingsComponent,
    EconomiasComponent,
    ParcelasComponent,
    NovoPagamentoComponent,
    CaixaComponent,
    CaixaSimulacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [
    PagamentosListaComponent,
    NovoPagamentoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
