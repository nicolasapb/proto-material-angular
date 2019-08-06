import { TipoPagamento } from './TipoPagamento';

export class PagamentosLista {
    id?: number;
    beneficiario: string;
    dtVencimento: Date;
    valor: number;
    dtPagamento: Date;
    valorPago: number;
    autenticacao: string;
    contaDestino: string;
    cnpj: string;
    tipo: TipoPagamento;
}
