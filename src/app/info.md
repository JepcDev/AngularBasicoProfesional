## INFO

### Componente
Componente: Es la piesa minima fundamental de logica de programacion. Es una pequeña parte de codigo que contiene html,js,css que se puede encapsular en una capsula(Componente) con un nombre y que se pueda reutilizar en cualquier parte de la aplicacion, puede ser ejemplo: un navbar, una seccion, footer, etc.

- ng generate component nombreComponente //Crea un componente // se puede usar => ng g c nombreComponente
-

@NgModulo: Es el encargado de avisarle a angular que existe un componente y que lo debe renderizar.

```'ReadableByteStreamController' is referenced directly or indirectly in its own type annotation.
492         var ReadableByteStreamController: typeof globalThis extends// "@types/node": "20.11.1",
```


Todo lo que se encuentra en el component.ts se puede llamar desde el component.html
Los eventos que suceden en el html de cualquier cosa se capturan con () y lo que va accionar ese evento es codigo js

### Directivas
Es una funcionalidad de angular que Nos permite extender la funcionalidad de un elemento html.
Se pueden combinar las directivas.

Existen 3 tipos de directivas: Directivas de componente, directivas estructurales, directivas de atributo

- Directiva de Componente: Son los componentes, un componente es un elemento html con funcionalidade extendida
muestro algo en pantalla y le agrego la funcionalidades que vemos dentro de este componente y muchas otras funcionalidades
Las directivas de componente son las directivas que tienen un template html

```typescript
@import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', //Las direcitivas de componente son las directivas que tienen un template html
  styleUrls: ['./header.component.scss']
})

export class NameComponent implements OnInit {
  currentDate: Date | null = null;//
  resultado: number = 0;
  constructor() { }

  ngOnInit() { }
  sumar(a:number, b:number){
    this.resultado = a + b;
  }
}
```
- Directiva de atributo: Modifican la apariencia/comportamiento de un elemento del DOM,de un elmento html o de un componente ya que se pueden utilizar componente dentro de html con tags de angular.
se utilizan como atributos de un elemento HTML
```html
 <!-- ngClass: es un atributo que se da a cualquier elemento html del DOM, y en la condicion le damos un pedazo de codigo js en el que al final tenemos que devolver el nombre de una clase, una cadena,
Ns permite poner clases de manera dinamica basados en variables o en cualquier logica de js
Extendemos la funcionalidad de html con codigo de js
  En este ejemplo decimos que le vamos a poner la cadena "success" si res igual a success
-->

<div
  [ngClass]="{'success': res === 'success'}"
>
  ¡Mensaje!
</div>

<!-- ngStyle: es lo mismo pero con estilos de css, vamos a poner un estilo de css.
a la clase color le vamos a poner el valor de res.color
 -->
<div
  [ngStyle]="{'color': res.color}"
>
  ¡Mensaje!
</div>

<!-- ngModel: Nos permite anexar una variable a un elmento de input para controlar formularios,en este ejemplos usamos ngModel para controlar lo que se este escribiendo en el input se almacene dentro de la variable name.
 -->
<input
  [(ngModel)]="name"
>

```
- Directivas estructurales: Son aquellas que alteran la estructura del DOM, pueden agregar mas elementos, o pueden quitarlos, pueden ocultarlos, renderizarlos despues de un cierto tiempo, cualquier cosas que sea cambiar la estructura del DOM.
Se caracterizan por tener el prefijo '*' antes de la directiva y de igual manera se ponen como si fueran atributos del elemento
No se pueden agregar mas de 1 directiva por elemento html del DOM
```html
<!-- *ngIf: Se refiere a que se va a renderizar el elmento que lo contiene siempre y cuando se cumpla una condicion
  Aqui le decimos que se a renderizar la section img siempre y cuando el selectedHero.name exista es decir no sea nulo o vacio, indefinido ect, tiende a true
 -->
<section class= "img-section" *ngIf="selectedHero.name">
  <h2>{{selectedHero.name}}</h2>
  <img [src]="selectedHero.img" [alt]="selectedHero.name">
</section>

<!-- *ngFor: Es como un for, iteramos algo,
  en este caso la etiqueta *ngFor se encarga de duplicar al elemento que lo contiene,
  iteramos la cadena o array superHeroes y renderizamos hero.id y hero.name, se crea por cada elemento de superHeroes un li con un span
 -->
<ul class="heroes">
  <li *ngFor="let hero of superHeroes" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<!-- *ngTemplateOutlet: Nos permite renderizar templates
un ngtemplate Es un div que no existe hasta que yo lo llame en alguna lugar del DOM
 -->
<ng-template #noSuperHeroes>
  <div>There is not superHeroes to show</div>
</ng-template>

<!-- la forma de llamar un ngtemplate es mediante su id como podemos observar o bien como es codigo js se puede poner una condicion y de acuerdo si se cumple o no esa condicion el ngtemplate se llma-->
<ng-container *ngTemplateOutlet="noSuperHeroes"></ng-container>

```

