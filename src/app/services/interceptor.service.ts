import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Al hacer un implement estamos obligando a hacer que este InterceptorService sea una copia del HttpInterceptor es decir que implemente sus metodos y funciones
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  // El "req" viene a ser la peticion que sale del frontend, aqui capturamos el request -> get, pot, etc
  // next es lo que se envia despues que se hace la logica del intercept, deja seguir al request que tenia pendiente
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptado!!!");
    const newReq = req.clone({
      setHeaders:{
        authoriZation: 'FakeAuth'
      }
    })
    // return next.handle(req);
    return next.handle(newReq);

  }
}
