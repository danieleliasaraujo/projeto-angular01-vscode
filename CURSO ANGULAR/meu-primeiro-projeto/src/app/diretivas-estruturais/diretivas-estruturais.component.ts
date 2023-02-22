import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean=true;
  public conditionClick: boolean=true;

  public escolhaNome:string ='daniel';

  public listaNomes:Array<{nome:string, idade:number}>=[
    {nome:"Daniel Araujo", idade:42}
    ,{nome:"Luana", idade:25}
    ,{nome:"loyane", idade:16}
    ,{nome:"Larissa", idade:15}
  ];

  public adicionarNomeLista(){
    this.listaNomes.push({nome:"Ronaldo", idade:80})
  }

  public deletarNomeLista(event:number){
    this.listaNomes.splice(event,1)
  }  
 
  ngOnInit(): void {
    setInterval( ()=>{
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }    

  }

}
