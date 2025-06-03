import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AtributoComponent } from './directive/atributo/atributo.component';
import { EstructuralComponent } from './directive/estructural/estructural.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { CompraModule } from './compra/compra.module';
import { AppRoutingModule } from './app-routing.module';
import { VentaModule } from './venta/venta.module';
import { FomulariosComponent } from './components/fomularios/fomularios.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtributoComponent,
    EstructuralComponent,
    PipesComponent,
    EstadosPipe,
    FomulariosComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Modulos creados
    AppRoutingModule,
    CompraModule,
    VentaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
