import { Component, DoCheck } from '@angular/core';
import { first, last } from 'rxjs';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements DoCheck{

 
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  
 /*  [
 {task:"Minha nova tarefa", checked:true},
    {task:"Minha nova tarefa 2", checked:false}, 
  ];*/

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("deseja realmente deletar tudo?")
    if(confirm){
      this.taskList = []
    }
 
  }  

  public validationInput(event:string, index: number){
    if(!event.length){
      const confirm = window.confirm("Tarefa vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){

    if(this.taskList){

      this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))      

    }    

  }
  

}
