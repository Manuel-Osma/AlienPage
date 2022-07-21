import { Component } from '@angular/core';
import { Employee } from '../../interfaces/Empleados.interface';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent   {

  constructor() { }
  empleados : Employee[] = [
  {
    ID:2,
    HeadID:1,
    FullName: "Milena",
    Country:"colombia",
    City: "bogota",
    State:"Inactivo",
    Email:"mianasas@gmail.com",
    MobilePhone:"23233232323",
    isHackerOrAlien:"Hacker"

  },
  {
    ID:3,
    HeadID:1,
    FullName: "Luis",
    Country:"colombia",
    City: "Cali",
    State:"Activo",
    Email:"Luiscoraed@gmail.com",
    MobilePhone:"3132243222",
    isHackerOrAlien:"Hacker"

  }
]


}
