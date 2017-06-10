import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 goTo(location: string): void {
   if(window.location.hash ===location)
          window.location.hash="";
    window.location.hash = location;
   
}
}
