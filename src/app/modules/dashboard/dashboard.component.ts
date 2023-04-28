import { Component, Inject, OnInit } from '@angular/core';
import { TodoItemsService } from 'src/app/core/services/todoItems/todo-items.service';
import { Item } from 'src/app/schema/TodoResponse.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isOpen: boolean = false;
  todoItems: Item[] = [];
  private userID: number = 0;
  private todo: string = '';

  constructor(
    @Inject('ITodoItemService') private _todoItemService: TodoItemsService
  ) {}

  state(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  onCloseModal(state :boolean){
    this.isOpen = state;
  }

  ngOnInit(): void {
    this.Items;
  }

  get Items() {
    console.log('ejecucion de get');

    this._todoItemService.getTodoItems().subscribe({
      next: (response) => {
        console.log(response);
        this.todoItems = response.items;
        console.log(`items returned => ${this.todoItems}`);
      },
      error: (error) => console.log(`There was an error => ${error}`),
    });

    console.log(`Items ${this.todoItems}`);
    return this.todoItems;
  }

  addElement(item: Item): void {
    this._todoItemService.addItem(item).subscribe({
      next: (response: Item) => {
        this.todo = response.toDo;
        this.userID = response.userId;
        this.Items.push({userId: this.userID, toDo: this.todo})
        console.log("ELEMENT ADDED "+response.toDo)
      },
      error: (error) => console.log(`There was an error => ${error}`)
    });
    
  }
}
