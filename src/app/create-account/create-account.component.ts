import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  public accountForm:FormGroup = new FormGroup({
    account_name:new FormControl(),
    account_number:new FormControl(),
    available_balance:new FormControl(),
    city:new FormControl(),
    id:new FormControl(),
    ifsccode:new FormControl(),
  })

  constructor(private _accountService:AccountService, private _router:Router){}
  create(){
    console.log(this.accountForm.value);
    this._accountService.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Account Created Successfully!");
        this._router.navigateByUrl("/dashboard/account");
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
