import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Todo{
  itemName: string;
  itemDueDate: string;
  itemPriority: string;
  itemCategory: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb: FormBuilder) {
    // this.todos = [
    //   {
    //     itemName:'coding',
    //     itemDueDate:'07-11-2022',
    //     itemPriority:'high',
    //     itemCategory:'Work'
    //   },
    //   {
    //     itemName:'other',
    //     itemDueDate:'07-11-2022',
    //     itemPriority:'low',
    //     itemCategory:'Work'
    //   },
    //   {
    //     itemName:'other x2',
    //     itemDueDate:'07-11-2022',
    //     itemPriority:'middle',
    //     itemCategory:'Work'
    //   },
    //   {
    //     itemName:'other x2',
    //     itemDueDate:'07-11-2022',
    //     itemPriority:'middle',
    //     itemCategory:'Work'
    //   },
    //   {
    //     itemName:'other x2',
    //     itemDueDate:'07-11-2022',
    //     itemPriority:'middle',
    //     itemCategory:'Work'
    //   },
    // ]
  }
  form:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  })
  todos: Todo[] = [];

  today: number = Date.now();
  submitForm() {

  }
  onWillDismiss(e: any){
    console.log(e);
    
  }
  cancel(){

  }

  confirm(){

  }
  isColorPriority(priority: string){
  return priority === 'high' ? 'red':(priority === 'low'?'green':'orange')
  }
}
