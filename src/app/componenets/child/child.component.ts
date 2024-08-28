import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public nameFromParent: any;
 @Output() public childEvent = new EventEmitter();

 public eventChild(){
    this.childEvent.emit("from child to parent");
 }
}
