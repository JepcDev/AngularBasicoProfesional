import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './directive/estructural/estructural.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'pipes' , component: PipesComponent},
  {path:'estructural', component: EstructuralComponent}
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
