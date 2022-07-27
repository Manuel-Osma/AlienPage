import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmleditor',
  templateUrl: './htmleditor.component.html',
  styleUrls: ['./htmleditor.component.scss']
})
export class HTMLeditorComponent implements OnInit {
  isMultiline:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
