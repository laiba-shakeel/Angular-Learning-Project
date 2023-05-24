import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  myEvent(evt) 
  {
    console.warn(evt)
  }
  getVal(val)
  {
    console.warn(val)
  }
}
  // getName() {

  //   alert("laiba")
  // }
  // Name = 'Laiba shakeel'
  // getName() 
  // {
  //   return this.Name
  // }
  // obj={
  //   name:'Lareb', 
  //   age: '20y'
  // }
  // siteUrl= window.location.href

