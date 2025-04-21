import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBasicoProfesional';

  constructor(){
    // id falso del usuario que vamos a revisar si esta autorizado ingresar a ciertas rutas
    localStorage.setItem('id', '1234');
  }
}
