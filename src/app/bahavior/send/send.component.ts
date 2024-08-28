import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BeahaviorService } from 'src/app/Service/beahavior.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {

  constructor( private  behaviorService :BeahaviorService){}

  yourName : string = '';
  sendName(form:NgForm){
    console.log('name',this.yourName);
    this.behaviorService.setName(this.yourName);
  }

}
