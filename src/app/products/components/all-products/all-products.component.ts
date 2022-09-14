import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any[] = []
  categories:any = []
  cartProducts:any [] = []

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
    }, error => {
      alert("Error")
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    }, error => {
      alert("Error")
    })
  }

  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }

 }
 
}
