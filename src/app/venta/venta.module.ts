import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { HistorialVentaComponent } from './historial-venta/historial-venta.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';


@NgModule({
  declarations: [
    ListadoComponent,
    HistorialVentaComponent,
    NuevaVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
