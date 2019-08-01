import { Component, OnInit } from '@angular/core';
import { Economias } from '../economias';
import { ECONOMIAS } from '../mock-economias';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-economias',
  templateUrl: './economias.component.html',
  styleUrls: ['./economias.component.css']
})
export class EconomiasComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] = [['Poupança'], ['FGTS'], ['CDB'], ['Tesouro']];
  // public pieChartData: Economias[] = [ECONOMIAS];
  public pieChartData: number[] = [ECONOMIAS.poupanca, ECONOMIAS.fgts, ECONOMIAS.cdb, ECONOMIAS.tesouro];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,255,0,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
