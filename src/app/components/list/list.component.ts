import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ocultarTablero:boolean = false;
  ocultarCatalogo:boolean = false;
  ocultarTienda:boolean = false;

  ocultar:any={
    
  }


  constructor() { }

  ngOnInit(): void {
  }



}
