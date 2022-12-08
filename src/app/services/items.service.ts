import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../models/ITodo";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/posts`)
  }
}
