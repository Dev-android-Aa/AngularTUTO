import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs-compat';


@Component({
  selector: 'app-observatrut',
  templateUrl: './observatrut.component.html',
  styleUrls: ['./observatrut.component.css']
})
export class ObservatrutComponent implements OnInit {
  seconde :number = 0;
  ngOnInit(): void {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value:number)=>{
        this.seconde = value;
      }

    )
  }

}
