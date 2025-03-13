import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //Two Way Data Binding
  mobile:string='+91';

  //Property Binding[]
  isData:boolean=false;


  //Event Binding()
  click(){
    alert("Hello Good Morning!")
  }

  submit(){
    alert(this.mobile);
  }

  //Interpolation{{}}
  age:number=30;
  name:string='Srinivas';

  num1:number=0;
  num2:number=0;
  result:number=0;

  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result);
  }

}
