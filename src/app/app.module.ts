import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule }  from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    ParcelasComponent
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
