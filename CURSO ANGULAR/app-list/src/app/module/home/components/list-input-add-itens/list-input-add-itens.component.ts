import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-input-add-itens',
  templateUrl: './list-input-add-itens.component.html',
  styleUrls: ['./list-input-add-itens.component.scss']
})
export class ListInputAddItensComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList:string ="";

  public submitItemTaskList(){
    //console.log(this.addItemTaskList);

    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList ="";
    }

  }

}
