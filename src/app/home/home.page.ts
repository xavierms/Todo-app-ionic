import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {  }

  todos: Todo[] = [];

  title= "Today";
  today: number = Date.now();
  isModalOpen: boolean = false;

  postTodo(todo: Todo){
    this.todos.push(todo);
  }

  setOpenModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  setCloseModal(){
    this.isModalOpen = !this.isModalOpen;
  }
  clearForm(form: FormGroup){
    form.reset();
  }

  isColorPriority(priority: string){
    return priority === 'high' ? 'red':(priority === 'low'?'green':'orange');
  }
}
