import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras-progresso',
  templateUrl: './barras-progresso.component.html',
  styleUrls: ['./barras-progresso.component.css']
  
})
export class BarrasProgressoComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  valueEntrada = 100;
  valueParcelaUnica = 100;
  valueParcelas = 46;
  constructor() { }

  ngOnInit() {
  }

}
