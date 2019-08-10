import { TipoPagamento } from './TipoPagamento';

export class Resumo {
    tipoDeParcela: string;
    qtdParcelas: number;
    valor: number;
    total: number;
    dataInicial: Date;
    tipo: TipoPagamento;
}
