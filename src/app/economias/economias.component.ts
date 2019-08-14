import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { Economias } from './economias'; 
import { SavingsService } from '../savings/savings.service';

@Component({
  selector: 'app-economias',
  templateUrl: './economias.component.html',
  styleUrls: ['./economias.component.css']
})
export class EconomiasComponent implements OnChanges {

  @Input() economias: Economias;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
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

  public pieChartLabels: Label[] = ['Poupança', 'FGTS', 'CDB', 'Tesouro'];
  public pieChartData: number[] = [0, 0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)', 'rgba(255,255,0,0.5)'],
    },
  ];

  constructor(private service: SavingsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.economias && changes.economias.currentValue) {
      this.economias = changes.economias.currentValue;
      this.service.getSavings()
        .subscribe(savings => {
          this.economias.poupanca = savings.map(t => t.valor)
            .reduce((acc, value) => acc + value, 0);
          this.pieChartData = [this.economias.poupanca, this.economias.fgts, this.economias.cdb, this.economias.tesouro];
          });
    }
  }

}
