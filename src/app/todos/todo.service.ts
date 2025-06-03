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
      postId: postIdP
    }
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    // return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postIdP}`);
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`,{
      params,
    });
  }
}
