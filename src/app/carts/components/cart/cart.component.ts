import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from './../../../Shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,AfterViewChecked {

products:Product[] = []
   total !: number ;


constructor(private service:ProductsService) { }

ngOnInit(): void {
  this.getProducts();

}
ngAfterViewChecked() {
  this.getTotalPrice()
}




getProducts(){
  this.service.getAllProducts().subscribe((res:any) => {

    this.products = res;
    this.products.forEach((q)=>{
        q.quantity=1
    })

  }, error => {
    alert("Error")
  })
}
onDelete(id : number){

  this.products=this.products.filter((product)=>{
    return product.id !== id
  })


}

totalQuantity(quantity :any){
  //change quantity
 const  id = quantity.getAttribute("id")
  this.products[id-1].quantity=quantity.value

  //total price
  this.getTotalPrice()
  console.log(this.total);
}



getTotalPrice(){
  this.total=0
  this.products.forEach((el)=>{
    this.total += (el.price*el.quantity)
  })
}

}
