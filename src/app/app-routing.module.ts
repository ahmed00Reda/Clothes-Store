import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //lazy loading
   //{path: "products", loadChildren:() =>import('./products/product.module').then(m=> m.ProductModule) },
   {path:"products", component:AllProductsComponent},
  {path:"details",  component:ProductsDetailsComponent},
  {path:"cart",  component:CartComponent},

  {path: "**", redirectTo:"products", pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
