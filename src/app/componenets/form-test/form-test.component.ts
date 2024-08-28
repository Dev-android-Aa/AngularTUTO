import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/model/login';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent  {
   confirmPass: any ;
   public login : LoginModel;
   constructor(){
    this.login = new LoginModel();
   }
   onSubmit(form : NgForm){
      console.log(this.login);
   }
}
