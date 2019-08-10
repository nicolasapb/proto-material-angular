import { PagamentosLista } from '../../app/models/pagamentos-lista';
import { TipoPagamento } from '../../app/models/TipoPagamento';

export const PAGAMENTOS_LISTA: PagamentosLista[] = [
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 1, 12),
        valor: 30000.00,
        dtPagamento: new Date(2019, 1, 12),
        valorPago: 30000.00,
        autenticacao: 'MBB351FC703E985426DC491',
        contaDestino: '0350/0000207601',
        cnpj: '13.070.428/0001-52',
        tipo: TipoPagamento.entrada
    },
    {
        beneficiario: 'NATHALIE',
        dtVencimento: new Date(2019, 1, 12),
        valor: 5017.15,
        dtPagamento: new Date(2019, 1, 12),
        valorPago: 5017.15,
        autenticacao: 'MBB35920544BE66E5643C51',
        contaDestino: '0610/0000144768',
        cnpj: '28.014.107/0001-08',
        tipo: TipoPagamento.entrada
    },
    {
        beneficiario: 'AGILLITAS',
        dtVencimento: new Date(2019, 1, 21),
        valor: 17557.10,
        dtPagamento: new Date(2019, 1, 15),
        valorPago: 17557.10,
        autenticacao: 'MBB3525214DCA98BBBA614E',
        contaDestino: '19/2836300002',
        cnpj: '13.776.742/0001-55',
        tipo: TipoPagamento.entrada
    },
    {
        beneficiario: 'ABYARA',
        dtVencimento: new Date(2019, 1, 21),
        valor: 7525.75,
        dtPagamento: new Date(2019, 1, 19),
        valorPago: 7525.75,
        autenticacao: 'MBB3546C0CC9E28E173BC44',
        contaDestino: '2372/00318906',
        cnpj: '09.564.811/0001-90',
        tipo: TipoPagamento.entrada
    },
    {
        beneficiario: 'ABYARA',
        dtVencimento: new Date(2019, 2, 15),
        valor: 1250.00,
        dtPagamento: new Date(2019, 2, 15),
        valorPago: 1250.00,
        autenticacao: 'MBB35AEC72309BDA99EEB3',
        contaDestino: '2372/00318906',
        cnpj: '09.564.811/0001-90',
        tipo: TipoPagamento.parcela},
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 2, 15), 
        valor: 1254.96,  
        dtPagamento: new Date(2019, 2, 15), 
        valorPago: 1254.96,  
        autenticacao: '49962346A3AE97A749DA639', 
        contaDestino: '0350/0000207601', 
        cnpj: '13.070.428/0001-52',
        tipo: TipoPagamento.parcela},
    {
        beneficiario: 'ABYARA',
        dtVencimento: new Date(2019, 3, 15),
        valor: 1150.00,
        dtPagamento: new Date(2019, 3, 15),
        valorPago: 1150.00,
        autenticacao: 'MBB355E885E759030407153',
        contaDestino: '2372/00318906',   cnpj: '09.564.811/0001-90', tipo: TipoPagamento.parcela},
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 3, 15), valor: 1257.41,  dtPagamento: new Date(2019, 3, 15), valorPago: 1257.41,  autenticacao: 'MBB35C9AC05F709F2B3054B', contaDestino: '0350/0000207601', cnpj: '13.070.428/0001-52', tipo: TipoPagamento.parcela},
    {
        beneficiario: 'ABYARA',
        dtVencimento: new Date(2019, 4, 15), valor: 588.10,   dtPagamento: new Date(2019, 4, 15), valorPago: 588.10,   autenticacao: 'MBB3532C881F92A2DBB1073', contaDestino: '2372/00318906',   cnpj: '09.564.811/0001-90', tipo: TipoPagamento.parcela},
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 4, 15), valor: 1923.22,  dtPagamento: new Date(2019, 4, 15), valorPago: 1923.22,  autenticacao: '72D62397A3BEF37143CAA54', contaDestino: '0350/0000207601', cnpj: '13.070.428/0001-52', tipo: TipoPagamento.parcela},
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 5, 15), valor: 2531.91,  dtPagamento: new Date(2019, 5, 14), valorPago: 2531.91,  autenticacao: '5A862247733ED8884AAA868', contaDestino: '0350/0000207601', cnpj: '13.070.428/0001-52', tipo: TipoPagamento.parcela},
    {
        beneficiario: 'MAXCASA XXVII EMP IMOB LTDA',
        dtVencimento: new Date(2019, 6, 15), valor: 2531.91,  dtPagamento: new Date(2019, 6, 15), valorPago: 2531.91,  autenticacao: '99662387936EC6B149FA94A', contaDestino: '0350/0000207601', cnpj: '13.070.428/0001-52', tipo: TipoPagamento.parcela}
];
