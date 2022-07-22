import { Component } from '@angular/core';
import notify  from "devextreme/ui/notify";

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.scss']
})
export class LoadPanelComponent   {
  isVisiblePanel: boolean = false;
  indicador: string = "https://img.icons8.com/fluency/344/spinner-frame-6.png"
  message:string = "Cargando..";


  //TODO: toast implementar en el home
  types = ['error','info','success','warning'];
  isVisibleToast : boolean = false

  showMessage(){
    notify({
      message:"tienes un nuevo mensaje",
      width:230,
      position:{
        at:"bottom",
        my:"bottom",
        of:"container"
      }
    },
      this.types[Math.floor(Math.random()*3)],
      500
    )
  }
  showMessageCustom(){
    this.isVisibleToast = true;
  }

}
