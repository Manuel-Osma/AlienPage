import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  Velocidad!:number;
  constructor() {
    this.velocidad()
   }

  ngOnInit(): void {
  }
  velocidad(){
    this.Velocidad = Math.floor(Math.random() * 180)
    console.log(this.Velocidad);

  }

}
