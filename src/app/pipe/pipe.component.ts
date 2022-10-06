import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  title:string = 'Formatando com Pipe Angular'

  numFloat:number = 678.94

  dataHoje:Date = new Date()

  numDecimal:number = 789123.9563

  numPercet:number = 0.29

  raizUm:number = 25
  raizDois:number = 150
  raizTres:number = 1568

}
