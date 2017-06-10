import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     count =0;
   aboutC = 0;
  title = 'Welcome 2 AlaaZme'+"'" +'s Site!';


 goTo(location: string): void {
   if(window.location.hash ===location)
          window.location.hash="";
    window.location.hash = location;
   
}
aboutCl(){
 this.aboutC+=1;
      
}
about(){
      if(this.aboutC % 2===1)
       return true;
  return false;
  
     
}


edit(){
       this.count+=1;
       console.log(this.count);
}


    edited(){ 
 
  if(this.count % 2===1)
       return true;
  return false;
  
  }
}
