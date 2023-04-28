import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemService } from 'src/app/interfaces/IItemService';
import { Item, TodoResponse } from 'src/app/schema/TodoResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService implements IItemService {
  private url: string = 'https://localhost:7243/api/todo/';
  private items: Item[] = [];

  constructor(private _http: HttpClient) {}

  getTodoItems(): Observable<TodoResponse> {
    return this._http.get<TodoResponse>(this.url);
  }

  addItem(body: Item): Observable<Item> {
    return this._http.post<Item>(this.url, body);
  }
  editItem(): void {
    throw new Error('Method not implemented.');
  }
}
