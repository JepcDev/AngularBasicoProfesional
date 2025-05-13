import { Component, OnInit } from '@angular/core';

// Un decorador es la manera de extender la funcionalidad de algo
@Component({
  // indica como se va a llamar el componente
  selector: 'app-header',
  // template:'Kamba desde el mimso componente' ,//Cambia desde el mismo componente no se necesita un html externo
  templateUrl: './header.component.html', //se refiere al elemento externo html que se va renderizar en este componente
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // HeaderComponent es en realidad el componente
  // Los componentes tienen la particularidad que se puede hacer la logica en typescript y se renderize en el html, el proceso de mostrar en pantalla algun resultado es mas sencillo y automatico
  // OnInit es la primera funcion que se ejecuta una vez que el HTML ya se cargo

  // variable de una clase,(: Date | null) le especificamos que tipo de datos puede almacenar
  // currentDate: Date | null = new Date();//
  // currentDate: Date | null = null; //
  // resultado: number = 0;

  constructor() {}

  ngOnInit(): void {
    // this.currentDate = new Date();
    // console.log(this.currentDate);
    // const myname = 'jose';
    // console.log(`Hola ${myname}`);
    // let suma:number = this.sumar(1,4);
    // console.log('La suma total es = ',this.sumar(1,4));
  }

  // una funcion en angular
  // sumar(a:number, b:number){
  //   this.resultado = a + b;
  // }
}
