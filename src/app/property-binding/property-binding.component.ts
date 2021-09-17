import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  inputTextValue = 'sarasa';
  inputSubmitValue = 'B';
  botonDeshabilitado = false;

  constructor() { }

  ngOnInit(): void {
  }

}
