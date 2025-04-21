// Este modulo de rutas principal actua como si todos fueran hijos del componente principal que seria el app.component
// Cada contenedor de rutas hijas deberia tener su propio router-outlet para poder renderizar sus propias rutas hijas

import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './directive/estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { AuthGuard } from './auth.guard';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', redirectTo: 'pipes', pathMatch:'full'},
  {path: 'pipes' , component: PipesComponent},
  {path:'estructural', component: EstructuralComponent},
  {
    path: 'compra',
    component: ListadoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'nueva', component: NuevaCompraComponent },
      { path: 'historial', component: HistorialCompraComponent }
    ],
  },
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
