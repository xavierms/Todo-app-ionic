import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { SharedModule } from '../shared/shared.module';
import { TodoFormComponent } from './todo-form/todo-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    TodoCardComponent,
    TodoFormComponent
  ]
})
export class HomePageModule {}
