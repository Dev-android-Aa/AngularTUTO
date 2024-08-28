import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productData = [
    {ProductName:"orange",productPrice: 20 ,productQuantite:3},
    {ProductName:"banana",productPrice: 10 ,productQuantite:5},
    {ProductName:"apple",productPrice: 50 ,productQuantite:2},
    {ProductName:"nectarine",productPrice: 30 ,productQuantite:6},
  ]
  constructor() { }
}
