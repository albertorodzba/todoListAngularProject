import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/schema/TodoResponse.interface';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css'],
})
export class AddEditModalComponent {
  isModalOpen: boolean = true;
  userID: number = 0;
  todo: string = '';

  @Output()
  modalStateEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output()
  todoEmitter: EventEmitter<Item> = new EventEmitter();

  closeModal(): void {
    this.modalStateEmitter.emit(!this.isModalOpen);
  }

  addTodo(): void {
    if (this.userID === 0 || this.userID === null || this.todo === '')
      return alert('Empty fields are not allowed' + this.userID + " " + this.todo);

    this.todoEmitter.emit({ toDo: this.todo, userId: this.userID });
    this.modalStateEmitter.emit(!this.isModalOpen);
  }
}
