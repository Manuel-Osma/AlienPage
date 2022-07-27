import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/Empleados.interface';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent   {

 empleado:Employee={
  FullName:"Jose Manuel Sanchez",
  Country:"Colombia",
  City:"Bogota",
  Email:"Manuelosma2011@gmail.com",
  birthDay: new Date(),
  MobilePhone:"323232322323",
  notes: "jose manuel sanchez osma es nuevo en tal empresa se debe hacer un registro diario de lo que hace para poder llevar los tiempos de estos mismos"

 }
 birthDay = {
  disabled:false
 }

 submitButtom = {
  text: "submit",
  useSubmitBehavior: true
 }

 handleSubmit  = function(e:any){
 console.log("sirve");

 e.preventDefault();
 }

 submit(){
  notify("Enviado","success")
 }


}
