import { Component, OnInit, Input } from '@angular/core'; 
import { ECONOMIAS } from '../mock-data/mock-economias';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { Economias } from '../economias';

@Component({
  selector: 'app-economias',
  templateUrl: './economias.component.html',
  styleUrls: ['./economias.component.css']
})
export class EconomiasComponent implements OnInit {

  @Input() economias: Economias;

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
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,255,0,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.pieChartData = [this.economias.poupanca, this.economias.fgts, this.economias.cdb, this.economias.tesouro];
  }

}
