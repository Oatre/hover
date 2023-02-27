import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-box',
  templateUrl: './hover-box.component.html',
  styleUrls: ['./hover-box.component.css']
})
export class HoverBoxComponent {

  showBox: boolean;

  constructor() {
    this.showBox = false;
  }
  

}