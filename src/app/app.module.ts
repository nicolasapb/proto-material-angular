import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

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
    CaixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
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
