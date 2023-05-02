import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/schema/TodoResponse.interface';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
})
export class AddEditModalComponent {
  isModalOpen: boolean = true;
  title: string = "";
  todo: string = '';

  @Output()
  modalStateEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output()
  todoEmitter: EventEmitter<Item> = new EventEmitter();

  closeModal(): void {
    this.modalStateEmitter.emit(!this.isModalOpen);
  }

  addTodo(): void {
    if (this.title === "" || this.title === null || this.todo === '')
      return alert('Empty fields are not allowed' + this.title + " " + this.todo);

    this.todoEmitter.emit({ toDo: this.todo, title: this.title });
    this.modalStateEmitter.emit(!this.isModalOpen);
  }
}
