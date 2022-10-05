import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public exibirAlerta():void{
   console.log('Evento Disparado...') 
   alert('Evento Disparado...')
  }
}
