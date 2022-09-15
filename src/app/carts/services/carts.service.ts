import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../Shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cartItems :any = [] ;

  constructor() { }
  addItem(data:any){
   //
    console.log(data);
    this.cartItems.push(data)

  }
  getCartItems(){
    return this.cartItems
  }

}
