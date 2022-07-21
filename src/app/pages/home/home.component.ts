import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  isVisible:boolean = true;
  galleryDataSource = [
    "https://th.bing.com/th/id/OIP.4WVHCCHDtavFZPNAcXnmTQHaEb?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.R6-2RegiF9pO3IG99lEQSgAAAA?pid=ImgDet&w=221&h=208&c=7&dpr=1,25",
    "https://th.bing.com/th/id/OIP.wfBEWZxTW_sWDO4_Tr-KkAHaE7?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.DMc6skpo-9rD-lZn8Y6olwHaE8?pid=ImgDet&rs=1"
  ]
  constructor() {}
}
