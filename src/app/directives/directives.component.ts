import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;

  states:string[]=['AP','KA','KL','TN','TG','MH','JK'];

  products:any=[
    {name:'pen',price:10,rating:3.5},
    {name:'book',price:50,rating:4.0},
    {name:'Shirt',price:499,rating:3.6},
    {name:'Bag',price:700,rating:3.9},
    {name:'Shoes',price:999,rating:4.5},
    {name:'Mobile',price:20000,rating:3.9},
    {name:'Bike',price:140000,rating:4.0},
    {name:'Car',price:900000,rating:4.8},
  ]

  newDate:any=new Date();
}
