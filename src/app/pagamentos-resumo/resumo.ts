import { TipoPagamento } from '../pagamentos-lista/TipoPagamento';

export class Resumo {
    tipoDeParcela: string;
    qtdParcelas: number;
    valor: number;
    total: number;
    dataInicial: Date;
    tipo: TipoPagamento;
}
