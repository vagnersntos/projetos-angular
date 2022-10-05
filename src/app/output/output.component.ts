import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  //alias = apelido
  @Output() anunciador = new EventEmitter<any>()

  public objDados:any = {}

  public enviarDados(){
    this.anunciador.emit(this.objDados)
    console.log('Aqui estão os dados>>>>>>>', this.objDados)
  }
}
