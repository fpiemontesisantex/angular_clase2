import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() mensaje: string;
  @Output() eventoHijo = new EventEmitter<string>();

  constructor() { }
  
  ngAfterViewInit(): void {
    this.eventoHijo.emit('HOLA PAPÁ');
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }



}
