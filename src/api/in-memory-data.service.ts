import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Economias } from '../app/models/economias';
import { PagamentosLista } from '../app/models/pagamentos-lista';
import { TipoPagamento } from '../app/models/TipoPagamento';
import { Resumo } from '../app/models/resumo';
import { Savings } from '../app/models/savings';
import { Caixa } from '../app/models/caixa';
import { Simulacao } from 'src/app/models/simulacao';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const pagamentosLista: PagamentosLista[] = [{
      id: 1,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 1, 12),
      valor: 30000.00,
      dtPagamento: new Date(2019, 1, 12),
      valorPago: 30000.00,
      autenticacao: 'MBB351FC703E985426DC491',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.entrada
    }, {
      id: 2,
      beneficiario: 'NATHALIE',
      dtVencimento: new Date(2019, 1, 12),
      valor: 5017.15,
      dtPagamento: new Date(2019, 1, 12),
      valorPago: 5017.15,
      autenticacao: 'MBB35920544BE66E5643C51',
      contaDestino: '0610/0000144768',
      cnpj: '28.014.107/0001-08',
      tipo: TipoPagamento.entrada
    }, {
      id: 3,
      beneficiario: 'AGILLITAS',
      dtVencimento: new Date(2019, 1, 21),
      valor: 17557.10,
      dtPagamento: new Date(2019, 1, 15),
      valorPago: 17557.10,
      autenticacao: 'MBB3525214DCA98BBBA614E',
      contaDestino: '19/2836300002',
      cnpj: '13.776.742/0001-55',
      tipo: TipoPagamento.entrada
    }, {
      id: 4,
      beneficiario: 'ABYARA',
      dtVencimento: new Date(2019, 1, 21),
      valor: 7525.75,
      dtPagamento: new Date(2019, 1, 19),
      valorPago: 7525.75,
      autenticacao: 'MBB3546C0CC9E28E173BC44',
      contaDestino: '2372/00318906',
      cnpj: '09.564.811/0001-90',
      tipo: TipoPagamento.entrada
    }, {
      id: 5,
      beneficiario: 'ABYARA',
      dtVencimento: new Date(2019, 2, 15),
      valor: 1250.00,
      dtPagamento: new Date(2019, 2, 15),
      valorPago: 1250.00,
      autenticacao: 'MBB35AEC72309BDA99EEB3',
      contaDestino: '2372/00318906',
      cnpj: '09.564.811/0001-90',
      tipo: TipoPagamento.parcela
    }, {
      id: 6,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 2, 15),
      valor: 1254.96,
      dtPagamento: new Date(2019, 2, 15),
      valorPago: 1254.96,
      autenticacao: '49962346A3AE97A749DA639',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }, {
      id: 7,
      beneficiario: 'ABYARA',
      dtVencimento: new Date(2019, 3, 15),
      valor: 1150.00,
      dtPagamento: new Date(2019, 3, 15),
      valorPago: 1150.00,
      autenticacao: 'MBB355E885E759030407153',
      contaDestino: '2372/00318906',
      cnpj: '09.564.811/0001-90',
      tipo: TipoPagamento.parcela
    }, {
      id: 8,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 3, 15),
      valor: 1257.41,
      dtPagamento: new Date(2019, 3, 15),
      valorPago: 1257.41,
      autenticacao: 'MBB35C9AC05F709F2B3054B',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }, {
      id: 9,
      beneficiario: 'ABYARA',
      dtVencimento: new Date(2019, 4, 15),
      valor: 588.10,
      dtPagamento: new Date(2019, 4, 15),
      valorPago: 588.10,
      autenticacao: 'MBB3532C881F92A2DBB1073',
      contaDestino: '2372/00318906',
      cnpj: '09.564.811/0001-90',
      tipo: TipoPagamento.parcela
    }, {
      id: 10,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 4, 15),
      valor: 1923.22,
      dtPagamento: new Date(2019, 4, 15),
      valorPago: 1923.22,
      autenticacao: '72D62397A3BEF37143CAA54',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }, {
      id: 11,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 5, 15),
      valor: 2531.91,
      dtPagamento: new Date(2019, 5, 14),
      valorPago: 2531.91,
      autenticacao: '5A862247733ED8884AAA868',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }, {
      id: 12,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 6, 15),
      valor: 2531.91,
      dtPagamento: new Date(2019, 6, 15),
      valorPago: 2531.91,
      autenticacao: '99662387936EC6B149FA94A',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }, {
      id: 13,
      beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
      dtVencimento: new Date(2019, 7, 1),
      valor: 2531.91,
      dtPagamento: new Date(2019, 7, 1),
      valorPago: 2531.91,
      autenticacao: '36E624C8933E65414ADAA1B',
      contaDestino: '0350/0000207601',
      cnpj: '13.070.428/0001-52',
      tipo: TipoPagamento.parcela
    }];

    const resumo: Resumo[] = [{
        tipoDeParcela: 'Entrada',
        qtdParcelas: 1,
        valor: 60000.00,
        total: 60000.00,
        dataInicial: new Date(2019, 1, 11),
        tipo: TipoPagamento.entrada
      },
      {
        tipoDeParcela: 'Mensais',
        qtdParcelas: 13,
        valor: 2500.00,
        total: 32500.00,
        dataInicial: new Date(2019, 2, 15),
        tipo: TipoPagamento.parcela
      },
      {
        tipoDeParcela: 'Única',
        qtdParcelas: 1,
        valor: 25500.00,
        total: 25500.00,
        dataInicial: new Date(2019, 11, 15),
        tipo: TipoPagamento.outros
      },
      {
        tipoDeParcela: 'Financiamento',
        qtdParcelas: 1,
        valor: 391881.00,
        total: 391881.00,
        dataInicial: new Date(2020, 3, 15),
        tipo: TipoPagamento.outros
      },
      {
        tipoDeParcela: 'Única',
        qtdParcelas: 1,
        valor: 500.00,
        total: 500.00,
        dataInicial: new Date(2020, 2, 15),
        tipo: TipoPagamento.outros
      },
    ];

    const savings: Savings[] = [{
        id: 1,
        valor: 5208.54
      },
      {
        id: 2,
        valor: 4000.00
      },
      {
        id: 3,
        valor: 2800.00
      },
      {
        id: 4,
        valor: 200.00
      },
      {
        id: 5,
        valor: 2000.00
      },
      {
        id: 6,
        valor: 14.92
      },
      {
        id: 7,
        valor: -300.00
      },
      {
        id: 8,
        valor: 30.44
      },
      {
        id: 9,
        valor: 14.97
      },
      {
        id: 10,
        valor: 2300.00
      },
      {
        id: 11,
        valor: 16.76
      },
      {
        id: 12,
        valor: 10.11
      },
      {
        id: 13,
        valor: 4700.00
      },
      {
        id: 14,
        valor: 15.03
      },
      {
        id: 15,
        valor: 25.33
      },
      {
        id: 16,
        valor: 2300.00
      },
      {
        id: 17,
        valor: 20.19
      },
      {
        id: 18,
        valor: 10000.00
      },
      {
        id: 19,
        valor: 57.96
      },
      {
        id: 20,
        valor: 1585.75
      }
    ];

    const economias: Economias = {
      // poupanca: savings.map(t => t.valor).reduce((acc, value) => acc + value, 0),
      fgts: 55180.34,
      cdb: 35811.54,
      tesouro: 25461.10
    };

    const caixa: Caixa = {
      ppr: 16000,
      carro: 50000,
      prev: 9300.42,
      poupanca: 20888.58,
      fgts: 60000,
      cdb: 36000,
      tesouro: 25500
    };

    return {
      economias,
      pagamentosLista,
      resumo,
      savings,
      caixa
    };
  }
}
