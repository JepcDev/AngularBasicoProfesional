import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }
  ngOnInit(): void {
    // rxjs operarodres -> se puede transformar la informacion que recibimos y se lo enviamos al sucribe.
    this.todoService.posts$
    // Este pipe se puede aplicar en cualquier parte
      .pipe(
        //  this.todoService.posts$ , este observable me va mandar la infromacion que en este caso es una cadena.
        // aqui van los distintos operadores
        // es parecido al map de los arrays solo que esto es un flujo
        // de esta manera hacemos comunicacion entre componentes y hacer uso de algun filtrado
        map((res: number[]) => {
          // map por cada uno de los elemento de mi res = this.todoService.posts$ va hacer un map, map necesita retornar algo por que estan pasando la informacion de lado a lado, si no el sucribe no sabe que hacer ya que no le llega ninguna informacion
          console.log(res);
          // res = ['uno','dos','tres'];
          return res.filter(num => num > 3);
        }),
        tap((res)=>{
          // es un operador especial que nos permite ejecutar cierta logica sin que interfiera en el flujo de los datos
          console.log("Desde el rap: ", res);
        })
      )
      // Nos suscribimos dentro del todo, componente todo
      // this.todoService.posts$.subscribe((res)=>{
      .subscribe((res) => {
        console.log('Nueva data: ', res);
      });
  }

}
