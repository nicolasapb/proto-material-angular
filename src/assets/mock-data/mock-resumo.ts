import { Resumo } from '../../app/models/resumo';
import { TipoPagamento } from '../../app/models/TipoPagamento';

export const RESUMO: Resumo[] = [
    {tipoDeParcela: 'Entrada', qtdParcelas: 1, valor: 60000.00, total: 60000.00,
        dataInicial: new Date(2019, 1, 11), tipo: TipoPagamento.entrada},
    {tipoDeParcela: 'Mensais', qtdParcelas: 13, valor: 2500.00, total: 32500.00,
        dataInicial: new Date(2019, 2, 15), tipo: TipoPagamento.parcela},
    {tipoDeParcela: 'Única', qtdParcelas: 1, valor: 25500.00, total: 25500.00,
        dataInicial: new Date(2019, 11, 15), tipo: TipoPagamento.outros},
    {tipoDeParcela: 'Financiamento', qtdParcelas: 1, valor: 391881.00, total: 391881.00,
        dataInicial: new Date(2020, 3, 15), tipo: TipoPagamento.outros},
    {tipoDeParcela: 'Única', qtdParcelas: 1, valor: 500.00, total: 500.00,
        dataInicial: new Date(2020, 2, 15), tipo: TipoPagamento.outros},
];
