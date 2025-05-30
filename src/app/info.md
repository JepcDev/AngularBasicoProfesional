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

<div [ngClass]="{'success': res === 'success'}">¡Mensaje!</div>

<!-- ngStyle: es lo mismo pero con estilos de css, vamos a poner un estilo de css.
a la clase color le vamos a poner el valor de res.color
 -->
<div [ngStyle]="{'color': res.color}">¡Mensaje!</div>

<!-- ngModel: Nos permite anexar una variable a un elmento de input para controlar formularios,en este ejemplos usamos ngModel para controlar lo que se este escribiendo en el input se almacene dentro de la variable name.
 -->
<input [(ngModel)]="name" />
```

- Directivas estructurales: Son aquellas que alteran la estructura del DOM, pueden agregar mas elementos, o pueden quitarlos, pueden ocultarlos, renderizarlos despues de un cierto tiempo, cualquier cosas que sea cambiar la estructura del DOM.
  Se caracterizan por tener el prefijo '\*' antes de la directiva y de igual manera se ponen como si fueran atributos del elemento
  No se pueden agregar mas de 1 directiva por elemento html del DOM

```html
<!-- *ngIf: Se refiere a que se va a renderizar el elmento que lo contiene siempre y cuando se cumpla una condicion
  Aqui le decimos que se a renderizar la section img siempre y cuando el selectedHero.name exista es decir no sea nulo o vacio, indefinido ect, tiende a true
 -->
<section class="img-section" *ngIf="selectedHero.name">
  <h2>{{selectedHero.name}}</h2>
  <img [src]="selectedHero.img" [alt]="selectedHero.name" />
</section>

<!-- *ngFor: Es como un for, iteramos algo,
  en este caso la etiqueta *ngFor se encarga de duplicar al elemento que lo contiene,
  iteramos la cadena o array superHeroes y renderizamos hero.id y hero.name, se crea por cada elemento de superHeroes un li con un span
 -->
<ul class="heroes">
  <li *ngFor="let hero of superHeroes" (click)="onSelect(hero)"><span class="badge">{{hero.id}}</span> {{hero.name}}</li>
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

### Pipes

Son caractersticas de angular que nos permiten transformar los datos que vayamos a mostrar
La creacion es como el de un componente "ng g c pipes"
Pipe es una funcion que le vamos a pasar al template html para transformar los datos que se estan mostrando renderizando, podemos formaterar fechas, transformar a mayusculas, ect

ng g pipe pipes/estados //genera un pipe para que podamos customizarlo segun lo que necesitemos

Es reutilizable en toda la app en cualquier lugar que llamemos nuestro pipe

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "estados",
})
export class EstadosPipe implements PipeTransform {
  // es lo 1ro que se ejecuta cuando llamamos a nuestro pipe
  // el value seria el name en pipes.component.html, es lo que llama al pipe estado
  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? "PENDIENTE" : "REGISTRADO";
    return text;
  }
}
```

### Modulos

Es la agrupacion de distintos componentes que van a compartir cierta funcionalidad y cierta logica de negocio,
Todos los componentes, modulos independientes del proyecto van dentro de AppModule

Los modulos son agrupaciones de distintos componentes que comparten cierta funcionalidad y logica de negocio.
Si un componente no esta dentro(declarado) de un modulos no va a poder renderizarse(existir) y el modulo que contiene estos componentes es llamado, declarado, importado, puesto en appModule para poder funcionar.

appComponent es el modulo principal donde se pueden agrupar los nuevos modulos(en imports),
agrupar los componentes(listado,historial-compra,nueva-compra, etc) en este modulo nuevo(compra modulo), exportar el modulo y llamarlo dentro de appModule para tener la funcionalidad encapsulada.

si creamos un modulo dentro de una carpeta los nuevos componentes que crearemos en la misma capeta de dicho modulo, se agruparan dentro del modulo.

ng g m compra //Genera un modulo compra

En app.modules.ts se importan[imports] los nuevos modulos que estan fuera del modulo principal, y gracias a ello vamos a poder acceder a los nuevos componentes que se encuentran en los nuevos modulos independientes que importamos, no olvidarse exportar los componentes para que puedan ser accesibles fuera del modulo indipendiente en el cual estan agrupados.

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListadoComponent } from "./listado/listado.component";
import { NuevaCompraComponent } from "./nueva-compra/nueva-compra.component";
import { HistorialCompraComponent } from "./historial-compra/historial-compra.component";

@NgModule({
  declarations: [ListadoComponent, NuevaCompraComponent, HistorialCompraComponent],
  exports: [
    // Solo se puede usar ListadoComponent desde fuera del modulo independiente de compra, se puede llamar externamente desde otro modulo o componente a este o estos componente
    ListadoComponent,
  ],
  imports: [CommonModule],
})
export class CompraModule {}
```

### Rutas

Son las rutas() donde se van a renderizar nuestras vistas de las paginas (pagina compra, pagina carrito, pagina principal, etc)

siempre tenemos una ruta por cada pagina que vamos a ver.

Ruta se entiende como la direccion web ejemplo: x.com y se nos muestran un listado de twits, x.com/perfil es la ruta(direccion web ) de nuestro perfil qeu renderiza todo el contenido de nuestro profile

ng g m AppRouting //Se crea como un modulo y se lo integra en la raiz de la app

El componente contenedor debe tener la etiqueta router-outlet para que nuestro componente que estemos llamando o querramos acceder pueda ser renderizado. por que un componente no se pude cargar, renderizar por cuenta propia necesita estar contenido dentro de un componente.

```typescript
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './directive/estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'pipes' , component: PipesComponent},
  {path:'estructural', component: EstructuralComponent}
  {path:'compra', component: ListadoComponent, }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

```

### Rutas hijas

Asi se crean Rutas hijas dentro de una ruta pre-existente dentro de nuesto modulo de rutas.

En proyectos se suele tener rutas padres y rutas hijas, normalmente se usa cuenado el proyecto es grande y tenemos diferentes separaciones en modulos(logica del proyecto) del proyecto(modulo compra, venta, cliente etc y a su vez estos modulos tienen diferentes componentes(lista-compra, lista-venta, etc) y se necesitan rutas hijas para acceder a estos componentes hijos a travez de un componente padre)

En resumente un componente padre que sea el contenedor de las siguientes rutas que necesite.

```typescript
// Se necesita hacer referencia a la ruta padre antes de las rutas hijas para poder acceder a estas rutas que renderizan estos componentes de las rutas hijas.
// ListadoComponent -> Sera el contenedor de todas las rutas del modulo de compras
const routes: Routes = [
  { path: "pipes", component: PipesComponent },
  { path: "estructural", component: EstructuralComponent },
  {
    path: "compra",
    component: ListadoComponent,
    children: [
      { path: "nueva", component: NuevaCompraComponent },
      { path: "historial", component: HistorialCompraComponent },
    ],
  },
];
```

### Guards

Sirve para confirmar alguna medida proteccion cuando se quiere acceder a algunar ruta de la aplicacion, ejem si el usuario esta logeado, si el usuario tiene permiso para ver el contenido, o alguna otra logica de seguridad para la aplicacion.

Sirve para que antes de cargar una ruta, vamos a querer confirmar algo,si el usuario esta logeado o no, si el usuario tiene permiso o no para ver este contenido.

<!-- simulamos que estamos autenticando al usuario -->
<!-- ng g guard auth //canAtivate//permite ver si puedo o no ingresar a una ruta //genera un guard auth -->

Los guards no necesitan estar declarados dentro de los modulos. es decir no se agrega a ningun modulo o componente cuando se crea son independientes.
Los guards Van anexado al objeto de ruta que quiero proteger el acceso en el modulo de las rutas.
se le pasa a la ruta un array con los guards que se quiere tener en esa ruta como si fuera un atributo mas en la ruta.

```typescript
// app-routing.modules.ts
const routes: Routes = [
  { path: "", redirectTo: "pipes", pathMatch: "full" },
  { path: "pipes", component: PipesComponent },
  { path: "estructural", component: EstructuralComponent },
  {
    path: "compra",
    component: ListadoComponent,
    //Agreamos nuestro Gruard Aqui se agrega como un atributo mas de la ruta
    canActivate: [AuthGuard],
    children: [
      { path: "nueva", component: NuevaCompraComponent },
      { path: "historial", component: HistorialCompraComponent },
    ],
  },
];
```

```typescript
// auth.guard.ts
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  //canActivate es una funcion que va a ejecutar cierta logica de negocio que al final va devolver un booleano, Observable<boolean | UrlTree> | Promise<boolean | UrlTree>//este es un estado del router de angular | boolean | UrlTree
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // puede ser que el usuario quiera entrar a una ruta(compra,etc) y aqui hariamos una consulta al servidor(mandando el identificador del usuairo) para saber si el usuario esta autorizado para ingresar a la ruta de comptra a esa ruta(modulo).
    // dependiendo de lo que me responda el servidor responderia con lo ya mencionado, booleano etc.

    const idUsuario = localStorage.getItem("id");
    //   if (idUsuario === '1234') return true;
    // return false;
    // return idUsuario === '1234';
    if (idUsuario === "1234") {
      console.log("El usuario es CORRECTO");
      return true;
    } else {
      console.log("El usuario es INCORRECTO");
      return false;
    }
  }
}
```

### Aplicando lazy loading en rutas

Carga perezosa, es una estrategia para cargar de manera perezosa o a demanda los modulos que vayamos a necesitar.

Ejemplo: si tenemos 10 modulo y solo vamos a necesitar usar o de mayor uso 2 entonces estos 2 se cargaran desde un inicio de la aplicacion y los demas modulos solo cargaran cuando el usuario intente entrar a la ruta de cada modulo, de esta manera la carga es mucho mas rapida y si el usuario ocacional quiere entrar a una de las rutas poco visitadas, exploradas al entrar a esa ruta recien va descargar toda la logica de ese modulo.

<!-- ng g m venta --routing=true //crea un modulo de la logica de negocio con su propio modulo de rutas, el VentaRouterModule esta anexado al VentaModule-->
<!-- Componente que van a simular loos componentes de ventas -->

ng g c centa/listado
ng g c venta/historial-venta
ng g c venta/nueva-venta

VentaModule va actuar como si fuera una parte independiente de nuestra app, porque no va ser cargada al inicio, va tener todo lo necesario para poder iteractuar solo sin necesidad de estar cargandose al inicio,
ver: modulo de venta

### Formularios

Podemos utilizar los formularios sin necesidad de instalar ninguna libreria o complemento de terceros, solo con tener el proyecto ya se tiene una gran gama de posibilidades para crear y gestionar formularios.

Hay 2 tipos de formas de getsionar o manejar los formularios:

- Formularios por template:

- Formularios reactivos: Son los formularios mas populares en proyectos grandes.
  Son formularios que reaccionan a los datos que los usuarios ingresan en los inputs

Tenemos los validators que validan ciertas propiedades y funcionalidades de los formularios y segun se cumpla o no esa validacion sucede algo con el formulario.

ng g c components/fomularios --skip-tests //crea componentes sin tests

- Los FormControl, validan los campos de los fomularios, ademas hacen seguimiento a estos campos sin necesidad de tener un formulario completo, hace seguimieeto al valor y estado de un campo individual de un elemento del input del formulario.

```typescript
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-fomularios",
  templateUrl: "./fomularios.component.html",
  styleUrls: ["./fomularios.component.scss"],
})
export class FomulariosComponent implements OnInit {
  name = new FormControl("", [Validators.minLength(4), Validators.required]);
  isChecked = new FormControl(false);
  constructor() {}

  ngOnInit(): void {}
}
```

### FormGroups

Es un objeto que puede englobar encapsular a muchso formCotnrols dentro.

Podriamos armar los formularios del mismo nombre de los servicios que va a recibir el backend

```typescript
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-fomularios",
  templateUrl: "./fomularios.component.html",
  styleUrls: ["./fomularios.component.scss"],
})
export class FomulariosComponent implements OnInit {
  name = new FormControl("", [Validators.minLength(4), Validators.required]);
  isChecked = new FormControl(false);

  // FormGroup
  form = new FormGroup({
    nameG: new FormControl("", [Validators.minLength(4), Validators.required]),
    isCheckedG: new FormControl(true),
  });
  constructor() {}

  ngOnInit(): void {}
}
```

### Arquitectura de servicios en Angular

Desde angular hacemos consultas a la API REST y la API hace las consultas al servidor donde se encuentra nuestra base de datos y el servidor responde a la api y la api nos responde a nuestra consulta que hicimos desde angular en formato json.
Angular App <=>API REST <=> SERVIDOR

Nuestra angular App internamente trabaja con los COMPONENTES y estos componentes se encargan de renderizar lo que nosotros querramos mostrarles al usuario, son los SERVICIOS los que hacen las consultas a la API REST y la respuesta se las designan a los componentes.
|        ANGULAR  APP    |
COMPONENTES <== SERVICIOS <==> API REST <==> SERVIDOR