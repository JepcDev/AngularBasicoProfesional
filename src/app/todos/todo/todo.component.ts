import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    constructor(
      private todoService: TodoService
    ) {}
  ngOnInit(): void {
    // Nos suscribimos dentro del todo, componente todo
    this.todoService.posts$.subscribe((res)=>{
      console.log('Nueva data: ',res);
    });
  }

}
