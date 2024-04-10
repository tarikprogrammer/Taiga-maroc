import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  imageName:string="./assets/images/taiga.webp";
  name="Taiga Logo";
  isClick:boolean=true;
  isdesplay:boolean=false;
  onClick(){
    this.isClick=!this.isClick;
    this.isdesplay=!this.isdesplay;
  }
}
