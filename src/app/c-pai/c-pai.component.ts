import { Component } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent {
  // public texto:string = 'Este texto será exibido na janela de alerta!'
  // public outroTexto:string = 'Texto enviado do componente pai para o Filho'

  public recebendoDados(dadosRecebidos:any){
    let dados:string = 'Obrigado por se Cadastrar ' + dadosRecebidos.nome + '.' + '\n';
    dados = dados + 'O email ' + dadosRecebidos.email + ' Foi Cadastrado com Sucesso!'
    alert(dados)
  }
}
