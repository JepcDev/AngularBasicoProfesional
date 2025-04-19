import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    NuevaCompraComponent,
    HistorialCompraComponent
  ],
  exports: [
    // Solo se puede usar ListadoComponent desde fuera del modulo independiente de compra, se puede llamar externamente desde otro modulo o componente a este o estos componente
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    // Si no ponemos este componente aqui routerLink y demas elementos de las rutas no se reconoceran en el contenedor de las rutas hijas listado.component.html
    // Tambien es el modulo contenedor del componente contenedor listadoCompra, ya que es el contenedor modulo de los diferentes componentes es necesario para que estos componentes puedan acceder a las directivas y elementos que nos ofrece RouterModule
    RouterModule
  ]
})
export class CompraModule { }
