import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AtributoComponent } from './directive/atributo/atributo.component';
import { EstructuralComponent } from './directive/estructural/estructural.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { CompraModule } from './compra/compra.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtributoComponent,
    EstructuralComponent,
    PipesComponent,
    EstadosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CompraModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
