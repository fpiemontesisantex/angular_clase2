import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  mensajePadre: string = 'HIJO';
  mensajeHijo: string;
  miVariable: string = 'padre works!';

  constructor() { }

  ngOnInit(): void {
  }

  modificarMensaje() {
    this.mensajePadre = 'SOY TU PADRE';
  }

  mensajeRecibido($event: string) {
    this.mensajeHijo = $event;
  }

}
