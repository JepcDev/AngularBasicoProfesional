import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  name = 'JsonPipe';
  apellido = 'PIPESCOMPONENT';

  date = '2025-04-11T20:41:39+00:00';
  estadoPipe = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    this.estadoPipe =1;
  }
  changeStateNormal(){
    this.estadoPipe =0;
  }

  // nos es recomendable
  getTexState(){
    const text = this.estadoPipe === 0 ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }
}
