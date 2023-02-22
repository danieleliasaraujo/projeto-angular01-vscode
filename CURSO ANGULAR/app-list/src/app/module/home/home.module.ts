import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { HeaderComponent } from './components/header/header.component';
import { ListButtonDeleteAllComponent } from './components/list-button-delete-all/list-button-delete-all.component';
import { ListInputAddItensComponent } from './components/list-input-add-itens/list-input-add-itens.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

//Page
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    ListButtonDeleteAllComponent,
    ListInputAddItensComponent,
    ListTodoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
