import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../Service/product-service.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name : string = "Adil";
  location : string = "France";
  status ="activé";
  message ="";
  tableFruit:any =[];
  public userList :any = [];
constructor(private routerpage2 : Router , 
  private produavtService : ProductServiceService,
  private userService : UserService
  ){}

  ngOnInit(): void {
   this.getFruit();
   this.getUsers();
    
  }
  getStatus(){
   return  this.status ;
  }
  goTO(){
    this.routerpage2.navigate(["/register"])
   };
   getFruit(){
    this.tableFruit = this.produavtService.productData ;
   };
   getUsers(){
    this.userService.getUserFromPlaceHolder().subscribe(
      result => {
        this.userList = result ;
        console.log(result);
        
      }
    ) 
   }
}
