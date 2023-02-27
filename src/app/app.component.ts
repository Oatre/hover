import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PMW';

  showImage: boolean;

  constructor() {
    this.showImage = false;
  }

}