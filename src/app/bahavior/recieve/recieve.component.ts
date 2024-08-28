import { Component } from '@angular/core';
import { BeahaviorService } from 'src/app/Service/beahavior.service';

@Component({
  selector: 'app-recieve',
  templateUrl: './recieve.component.html',
  styleUrls: ['./recieve.component.css']
})
export class RecieveComponent {
  recieveName : string = '';
constructor( private behaviorService: BeahaviorService){

}
ngOnInit(): void {
  
  this.behaviorService.getName().subscribe(result=> {
    console.log('result Name :', result);
    this.recieveName = result ;
  })
}

}
