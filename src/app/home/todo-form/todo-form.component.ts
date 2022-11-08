import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  @Output() todoAdded = new EventEmitter();
  @Output() dataForm = new EventEmitter();
  @Output() isModalOpen = new EventEmitter();
  today: number = Date.now();
  priorities = ['high','middle','low'];
  categories = ['work','study'];

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    priority: ['', [Validators.required]],
    category: ['', [Validators.required]]
  });

  get errorControl() {
    return this.form.controls;
  }

  modelToPost(){
    const {name, priority, category} = this.form.value;
     const model:Todo ={
       itemName: name,
       itemDueDate: this.today,
       itemPriority: priority,
       itemCategory: category
     } 
     return model;
   }
   submitForm() {
    if (this.form.valid) {
      this.todoAdded.emit(this.modelToPost());
      this.form.reset();
      
      this.isModalOpen.emit(false);
    } 
  }
}
