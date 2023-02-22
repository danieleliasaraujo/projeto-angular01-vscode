import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  // Utilizando Interpolation
  public nome: string ="Daniel";
  public idade: number= 42;
  public maiUm: number= 1;

  // Utilizando Property Binding
  public checkedDisabled: boolean= true;
  
  public imgScr: string = "https://www.loggly.com/wp-content/uploads/2016/04/BLOG-1500x700Angular-Exception-Logging-405x300.png";
  public imgTitle: string ="Property Binding";


 // Utilizando Event Binding

  public position: {x: number, y: number} = {x:0, y:0};

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
   // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }
}
