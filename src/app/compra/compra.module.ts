import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';



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
    CommonModule
  ]
})
export class CompraModule { }
