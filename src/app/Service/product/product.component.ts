import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  tableFruit:any= [];
  constructor(private produstService : ProductServiceService){}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.tableFruit = this.produstService.productData;
    console.log(this.tableFruit);
  }

}
