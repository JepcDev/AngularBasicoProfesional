import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  // es lo 1ro que se ejecuta cuando llamamos a nuestro pipe
  // el value seria el name en pipes.component.html, es lo que llama al pipe estado
  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? 'PENDIENTE' : 'REGISTRADO';
    return text;
  }

}
