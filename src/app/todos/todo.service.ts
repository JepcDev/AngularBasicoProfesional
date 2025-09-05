import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Source -> es como el canal de la informacion,// lo hacemos de esta manera para tener conectado este Sourse con un observable que va poder consumido desde nuestros componentes.
  postSourse = new Subject<number[]>();//subject se inporta de rxjs
  // las variables observables llevan un "$" al final del nombre
  // Este observable va poder ser consumido por o desde nuestros componentes.
  // aqui podriamos usar el pipe
  posts$ = this.postSourse.asObservable()
  // .pipe(
  //   map((res: number[]) => {
  //     console.log(res);
  //     return res.filter((num) => num > 3);
  //   })
  // );
  constructor(
    // injectamos una dependencia de httpClient
    private http: HttpClient
  ) { }

  // getTodo devuelve un observable y por lo tanto lo que devuelve en el return es un observable
  getTodo() {
    // Esto vendria a ser un obsevable.
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postIdP: number) {
    const params = {
      // como el key y el valor se llman igual se podria dejar en postId
      // postIdP
      postId: postIdP
    }
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    // return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postIdP}`);
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {
      params,
    });
  }

  getPosts() {
    const body = {
      id: 1,
      comment: 'Hola',
      date: '2022-01-01'
    }
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body);
    // return this.http.post(`https://jsonplaceholder.typicode.com/posts`,null);
  }
}
