import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
//propriedade que será vinculada ao two-way
public nome:string = ''

}
