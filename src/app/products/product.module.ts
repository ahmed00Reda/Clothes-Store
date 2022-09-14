import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductComponent } from './components/all-products/product/product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ]
})
export class ProductModule { }
