import { Component, ViewChild } from '@angular/core';
import { DxValidationGroupComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent   {
  @ViewChild('targetGroup',{static:false}) validationGroup!: DxValidationGroupComponent
  login!:string;
  password!:string;

  // singIn(e:any){
  //   let result = e.validationGroup.validate();
  //   if (result.isValid) {
  //     notify("Form Enviado" , "success")
  // }
  validateGroup(){
    this.validationGroup.instance.validate();
  }
}
