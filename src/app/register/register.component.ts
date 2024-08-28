import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   firstName ="Adil";
  active:boolean = true;
  dataList= [
    {name: "adil" , code :154 ,country:"france"},
    {name: "adil1" , code :153 ,country:"franc1"},
    {name: "adil2" , code :152 ,country:"france2"}
  ]
  name:string = "mousa";
}
