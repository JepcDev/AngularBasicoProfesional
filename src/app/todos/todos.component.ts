import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(
    // agregamos el servicio de todos al componente de todos injectandolo como dependneica dentro del constructor ya que es un componente externo
    // todoService es un instancia del servicio TodoService y por lo tanto podemos usar todas sus funcionalidades.
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    // obtenemos la respuesta del servicio de todoService al que nos suscribimos para obtener todos los cambios de la api actualizados
    this.todoService.getTodo().subscribe((res: any) => {
      console.log(res);
      this.todos = res;
    });

    this.todoService
      .getComments(10)
      .subscribe((res) => console.log('comments ->', res));
    this.todoService
      .getPosts()
      .subscribe((res) => console.log('Posts ->', res));
  }
}
