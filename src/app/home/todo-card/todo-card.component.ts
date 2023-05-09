import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  @Input() todos: Todo[] = [];

  isColorPriority(priority: string){
    return priority === 'high' ? 'red':(priority === 'low'?'green':'orange');
  }
  onDelete(index : number){
    console.log(index);
    this.todos.splice(index,1);
    console.log(this.todos);
    
  }
}
