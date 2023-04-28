import { Observable } from "rxjs";
import { Item, TodoResponse } from "../schema/TodoResponse.interface";

export interface IItemService {
    getTodoItems(): Observable<TodoResponse>;
    addItem(body: Item): Observable<Item>;
    editItem(): void;
}