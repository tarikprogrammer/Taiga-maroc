import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  isTrue:boolean=false;
  disable(){
    this.isTrue=true;
  }
}
