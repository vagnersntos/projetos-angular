import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-input-filho',
  templateUrl: './c-input-filho.component.html',
  styleUrls: ['./c-input-filho.component.css']
})
export class CInputFilhoComponent {
/*elementos para fazer uso do Input Property*/
  @Input() mensagem!:string;
  @Input('alerta') outraMensagem!:string;

  public exibirMensagemAlerta():void{
    alert(this.outraMensagem)
    console.log('Aqui esta',this.outraMensagem)
    console.log('Aqui esta',this.mensagem)
  }
}
