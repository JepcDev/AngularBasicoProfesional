import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // es una funcion que va a ejecutar cierta logica de negocio que al final va devolver un booleano, Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    // puede ser que el usuario quiera entrar a una ruta(compra,etc) y aqui hariamos una consulta al servidor para saber si el usuario esta autorizado para ingresar a esa ruta(modulo).
    // dependiendo de lo que me responda el servidor responderia con lo ya mencionado.

    const idUsuario = localStorage.getItem('id');
    //   if (idUsuario === '1234') return true;
    // return false;
    // return idUsuario === '1234';
    if (idUsuario === '1234') {
      console.log('El usuario es CORRECTO');
      return true;
    } else {
      console.log('El usuario es INCORRECTO');
      return false;
    }
  }
}
