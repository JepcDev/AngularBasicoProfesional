import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    // injectamos una dependencia de httpClient
    private http: HttpClient
  ) { }

  getTodo(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postIdP: number){
    const params = {
      // como el key y el valor se llman igual se podria dejar en postId
      // postIdP
      postId: postIdP
    }
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    // return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postIdP}`);
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`,{
      params,
    });
  }

  getPosts(){
    const body = {
      id: 1,
      comment: 'Hola',
      date:'2022-01-01'
    }
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,body);
    // return this.http.post(`https://jsonplaceholder.typicode.com/posts`,null);
  }
}
